$workspace = Get-Location
$pythonRoot = Join-Path $workspace 'Python'
$jsRoot = Join-Path $workspace 'Javascript'

function Get-CleanConsegnaFromJs {
    param([string]$jsPath)

    if (-not (Test-Path $jsPath)) {
        return $null
    }

    $lines = Get-Content -Path $jsPath
    $out = New-Object System.Collections.Generic.List[string]
    $captureStarted = $false

    foreach ($line in $lines) {
        $trim = $line.Trim()

        if ($trim -eq '') {
            if ($out.Count -gt 0) {
                if ($out[$out.Count - 1] -ne '') {
                    $out.Add('')
                }
            }
            continue
        }

        if (-not $trim.StartsWith('//')) {
            if ($captureStarted -and $out.Count -gt 0) { break }
            continue
        }

        $text = $trim.Substring(2).Trim()
        $normalized = $text.ToLowerInvariant()

        if (-not $captureStarted) {
            if (
                $normalized -like '*todo*' -or
                $normalized -like '*consegna*' -or
                $normalized -like 'dato*' -or
                $normalized -like 'data*' -or
                $normalized -like '*restituisci*' -or
                $normalized -like '*scrivi*'
            ) {
                $captureStarted = $true
            }
            elseif ($out.Count -eq 0) {
                # Se non ci sono marker espliciti, usa comunque il primo blocco commentato.
                $captureStarted = $true
            }
        }

        if (-not $captureStarted) {
            continue
        }

        if (
            $normalized -like '*tempo di esecuzione*' -or
            $normalized -like '*codice scritto*' -or
            $normalized -like '*valutazione*' -or
            $normalized -like '*pro e contro*' -or
            $normalized -like '*prompt chatgpt*' -or
            $normalized -like '*esecuzione degli esercizi*'
        ) {
            break
        }

        # Rimuove prefissi decorativi mantenendo il testo della consegna
        $text = $text -replace '^(todo|\*|!|\?)\s*', ''
        $text = $text.Trim()

        if ($text -eq '') {
            if ($out.Count -gt 0 -and $out[$out.Count - 1] -ne '') {
                $out.Add('')
            }
            continue
        }

        $out.Add($text)
    }

    while ($out.Count -gt 0 -and $out[$out.Count - 1] -eq '') {
        $out.RemoveAt($out.Count - 1)
    }

    if ($out.Count -eq 0) {
        return $null
    }

    return ($out -join "`n")
}

$pyFiles = Get-ChildItem -Path $pythonRoot -Recurse -File -Filter '*.py'
$updated = 0
$fallback = 0

foreach ($pyFile in $pyFiles) {
    $relPy = $pyFile.FullName.Substring($pythonRoot.Length + 1)
    $candidateRelJs = [System.IO.Path]::ChangeExtension($relPy, '.js')

    $jsPath = Join-Path $jsRoot $candidateRelJs

    if (-not (Test-Path $jsPath)) {
        $jsByName = Get-ChildItem -Path $jsRoot -Recurse -File -Filter ([System.IO.Path]::GetFileName($candidateRelJs)) | Select-Object -First 1
        if ($jsByName) {
            $jsPath = $jsByName.FullName
        }
    }

    $consegna = $null
    if (Test-Path $jsPath) {
        $consegna = Get-CleanConsegnaFromJs -jsPath $jsPath
    }

    if (-not $consegna) {
        $consegna = 'Consegna non trovata nel file JavaScript corrispondente.'
        $fallback++
    }

    $content = "'''`n$consegna`n'''`n"
    Set-Content -Path $pyFile.FullName -Value $content -Encoding UTF8
    $updated++
}

Write-Host "File Python aggiornati: $updated"
Write-Host "File con consegna fallback: $fallback"
