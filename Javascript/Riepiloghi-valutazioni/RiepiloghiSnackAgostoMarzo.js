// Riepilogo esercizi da Agosto a Marzo
// Nome esercizio + tempo di esecuzione annotato nel file originale

const esercizi = [
  // Agosto
  { file: "1.VowelCalance-11Agosto.js", nome: "Vowel Calance", tempo: { minuti: 30, secondi: 0 } },
  { file: "2.BaseCheck-12Agosto.js", nome: "Base Check", tempo: { minuti: 30, secondi: 0 } },
  { file: "3.FibonacciSequence-13Agosto.js", nome: "Fibonacci Sequence", tempo: { minuti: 9, secondi: 48 } },
  { file: "4.Spacejam.-14Agosto.js", nome: "Spacejam", tempo: { minuti: 4, secondi: 49 } },
  { file: "5.Jbelmud text-15Agosto.js", nome: "Jbelmud text", tempo: null },
  { file: "6.AnagramChecker-16Agosto.js", nome: "Anagram Checker", tempo: { minuti: 16, secondi: 11 } },
  { file: "7.TargetSum-17Agosto.js", nome: "Target Sum", tempo: { minuti: 15, secondi: 45 } },
  { file: "8.Factorializer-18Agosto.js", nome: "Factorializer", tempo: { minuti: 3, secondi: 33 } },
  { file: "9.SumOfSquares-19Agosto.js", nome: "Sum Of Squares", tempo: { minuti: 3, secondi: 49 } },
  { file: "10.3Strikes-20Agosto.js", nome: "3 Strikes", tempo: null },
  { file: "11.MilePace-21Agosto.js", nome: "Mile Pace", tempo: null },
  { file: "12.MessageDecoder-22Agosto.js", nome: "Message Decoder", tempo: { minuti: 30, secondi: 0 } },
  { file: "13.UnnaturalPrime-23Agosto.js", nome: "Unnatural Prime", tempo: null },
  { file: "14.CharactersBattle-24Agosto.js", nome: "Characters Battle", tempo: null },
  { file: "15.camelCase-25Agosto.js", nome: "camelCase", tempo: { minuti: 22, secondi: 24 } },
  { file: "16.ReverseParenthesis-26Agosto.js", nome: "Reverse Parenthesis", tempo: null },
  { file: "17.UnorderOfOperation-27Agosto.js", nome: "Unorder Of Operation", tempo: null },
  { file: "18.SecondBest-28Agostro.js", nome: "Second Best", tempo: null },
  { file: "19.Candlelight-29Agosto.js", nome: "Candlelight", tempo: null },
  { file: "20.ArrayDuplicates-30Agosto.js", nome: "Array Duplicates", tempo: { minuti: 8, secondi: 36 } },
  { file: "21.HexGenerator-31Agosto.js", nome: "Hex Generator", tempo: { minuti: 21, secondi: 32 } },

  // Settembre
  { file: "22.TribonacciSeuqnece-1Settembre.js", nome: "Tribonacci Sequence", tempo: { minuti: 11, secondi: 48 } },
  { file: "23.RgbToHex-2Settembre.js", nome: "Rgb To Hex", tempo: null },
  { file: "24.Pangram-3Settembre.js", nome: "Pangram", tempo: null },
  { file: "25.VowelRepeater-4Settembre.js", nome: "Vowel Repeater", tempo: null },
  { file: "26.IPv4Validator-5Settembre.js", nome: "IPv4 Validator", tempo: { minuti: 26, secondi: 23 } },
  { file: "27.MatrixRotate-6Settembre.js", nome: "Matrix Rotate", tempo: null },
  { file: "28.RomanNumeralParser-7Settembre.js", nome: "Roman Numeral Parser", tempo: null },
  { file: "29.AcronumBuilder-8Settembre.js", nome: "Acronum Builder", tempo: { minuti: 13, secondi: 12 } },
  { file: "30.UniqueCaracters-9Settembre.js", nome: "Unique Caracters", tempo: { minuti: 8, secondi: 48 } },
  { file: "31.ArrayDiff-10Settembre.js", nome: "Array Diff", tempo: null },
  { file: "32.ReverseSentence-11Settembre.js", nome: "Reverse Sentence", tempo: { minuti: 9, secondi: 59 } },
  { file: "33.ScreenTime-12Settembre.js", nome: "Screen Time", tempo: { minuti: 11, secondi: 42 } },
  { file: "34.MissingNumbers-13Settembre.js", nome: "Missing Numbers", tempo: { minuti: 15, secondi: 8 } },
  { file: "35.WordFrequency-14Settembre.js", nome: "Word Frequency", tempo: null },
  { file: "36.ThermostatAdjuster-15Settembre.js", nome: "Thermostat Adjuster", tempo: { minuti: 1, secondi: 14 } },
  { file: "37.SentenceCapitalize-16Settembre.js", nome: "Sentence Capitalize", tempo: null },
  { file: "38.SlugGenerator-17Settembre.js", nome: "Slug Generator", tempo: { minuti: 6, secondi: 0 } },
  { file: "39.FillTheTank-18Settembre.js", nome: "Fill The Tank", tempo: { minuti: 2, secondi: 30 } },
  { file: "40.PhotoStorage-19Settembre.js", nome: "Photo Storage", tempo: { minuti: 6, secondi: 6 } },
  { file: "41.FileStorage-20Settembre.js", nome: "File Storage", tempo: { minuti: 10, secondi: 0 } },
  { file: "42.VideoStorage-21Settembre.js", nome: "Video Storage", tempo: { minuti: 13, secondi: 10 } },
  { file: "43.DigitsVsLetters-22Settembre.js", nome: "Digits Vs Letters", tempo: { minuti: 6, secondi: 35 } },
  { file: "44.StringMirror-23Settembre.js", nome: "String Mirror", tempo: { minuti: 14, secondi: 57 } },
  { file: "45.PerfectSquare-24Settembre.js", nome: "Perfect Square", tempo: { minuti: 6, secondi: 54 } },
  { file: "46.2ndLargest-25Settembre.js", nome: "2nd Largest", tempo: { minuti: 9, secondi: 44 } },
  { file: "47.CaughtSpeeding-26Settembre.js", nome: "Caught Speeding", tempo: { minuti: 15, secondi: 27 } },
  { file: "48.SpamDetector-27Settembre.js", nome: "Spam Detector", tempo: null },
  { file: "49.CsvHeaderParses-28Settembre.js", nome: "Csv Header Parses", tempo: { minuti: 3, secondi: 36 } },
  { file: "50.LongestWord-29Settembre.js", nome: "Longest Word", tempo: { minuti: 17, secondi: 1 } },
  { file: "51.PhoneNumberFormatter-30Settembre.js", nome: "Phone Number Formatter", tempo: { minuti: 5, secondi: 40 } }

  // Ottobre
  ,{ file: "52.BinaryToDecimal-01Ottobre.js", nome: "Binary To Decimal", tempo: null }
  ,{ file: "53.DecimalToBinary-02Ottobre.js", nome: "Decimal To Binary", tempo: null }
  ,{ file: "54.P@ssw=rdStr3ngth!-03Ottobre.js", nome: "Password Strength", tempo: null }
  ,{ file: "55.SpaceWeekDay1-StellarClassification-04Ottobre.js", nome: "Stellar Classification", tempo: { minuti: 3, secondi: 17 } }
  ,{ file: "56.SpaceWeekDay2-ExoplanetSearch-05Ottobre.js", nome: "Exoplanet Search", tempo: null }
  ,{ file: "57.SpaceWeekDay3-PhoneHome-06Ottobre.js", nome: "Phone Home", tempo: null }
  ,{ file: "58.SpaceWeekDay4-LandingSpot-07Ottobre.js", nome: "Landing Spot", tempo: null }
  ,{ file: "59.SpaceWeekDay5-GoldilocksZone-08Ottobre.js", nome: "Goldilocks Zone", tempo: { minuti: 12, secondi: 2 } }
  ,{ file: "60.SpaceWeekDay6-MoonPhase-09Ottobre.js", nome: "Moon Phase", tempo: null }
  ,{ file: "61.SpaceWeekDay7-LaunchFuel-10Ottobre.js", nome: "Launch Fuel", tempo: null }
  ,{ file: "62.HexToDecimal-11Ottobre.js", nome: "Hex To Decimal", tempo: null }
  ,{ file: "63.BattleOfWords-12Ottobre.js", nome: "Battle Of Words", tempo: null }
  ,{ file: "64.24To12-13Ottobre.js", nome: "24 To 12", tempo: { minuti: 19, secondi: 33 } }
  ,{ file: "65.StringCount-14Ottobre.js", nome: "String Count", tempo: { minuti: 15, secondi: 0 } }
  ,{ file: "66.HTMLTagStripper-15Ottobre.js", nome: "HTML Tag Stripper", tempo: { minuti: 2, secondi: 0 } }
  ,{ file: "67.EmailValidator-16Ottobre.js", nome: "Email Validator", tempo: null }
  ,{ file: "68.CreditCardMasker-17Ottobre.js", nome: "Credit Card Masker", tempo: { minuti: 18, secondi: 52 } }
  ,{ file: "69.MissingSocks-18Ottobre.js", nome: "Missing Socks", tempo: { minuti: 20, secondi: 0 } }
  ,{ file: "70.HtmlAttributeExtractor-19Ottobre.js", nome: "Html Attribute Extractor", tempo: null }
  ,{ file: "71.TipCalculator-20Ottobre.js", nome: "Tip Calculator", tempo: { minuti: 16, secondi: 32 } }
  ,{ file: "72.ThermostatAdjkuster2-21Ottobre.js", nome: "Thermostat Adjkuster 2", tempo: { minuti: 15, secondi: 36 } }
  ,{ file: "73.SpeakWiselyTuouMust-22Ottobre.js", nome: "Speak Wisely Tuou Must", tempo: null }
  ,{ file: "74.FavoriteSongs-23Ottobre.js", nome: "Favorite Songs", tempo: { minuti: 7, secondi: 30 } }
  ,{ file: "75.HiddenTreasure-24Ottobre.js", nome: "Hidden Treasure", tempo: null }
  ,{ file: "76.ComplementaryDNA-25Ottobre.js", nome: "Complementary DNA", tempo: { minuti: 9, secondi: 42 } }
  ,{ file: "77.DurationFormatter-26Ottobre.js", nome: "Duration Formatter", tempo: null }
  ,{ file: "78.IntegerSequence-27Ottobre.js", nome: "Integer Sequence", tempo: { minuti: 2, secondi: 33 } }
  ,{ file: "79.Navigator-28Ottobre.js", nome: "Navigator", tempo: null }
  ,{ file: "80.EmailSorter-29Ottobre.js", nome: "Email Sorter", tempo: null }
  ,{ file: "81.NthPrime-30Ottobre.js", nome: "Nth Prime", tempo: null }
  ,{ file: "82.SpOoKy-CaSe-31Ottobre.js", nome: "SpOoKy CaSe", tempo: null }

  // Novembre
  ,{ file: "83.SignatureValidation-01Novembre.js", nome: "Signature Validation", tempo: null }
  ,{ file: "84.Infected-02Novembre.js", nome: "Infected", tempo: { minuti: 12, secondi: 40 } }
  ,{ file: "85.WordCounter-03Novembre.js", nome: "Word Counter", tempo: { minuti: 1, secondi: 1 } }
  ,{ file: "86.ImageSearch-04Novembre.js", nome: "Image Search", tempo: { minuti: 8, secondi: 42 } }
  ,{ file: "87.MatrixBuilder-05Novembre.js", nome: "Matrix Builder", tempo: { minuti: 11, secondi: 58 } }
  ,{ file: "88.WeekdayFinder-06Novembre.js", nome: "Weekday Finder", tempo: { minuti: 4, secondi: 43 } }
  ,{ file: "89.CoutingCards-07Novembre.js", nome: "Couting Cards", tempo: null }
  ,{ file: "90.CharacterLimit-08Novembre.js", nome: "Character Limit", tempo: { minuti: 2, secondi: 8 } }
  ,{ file: "91.WordSearch-09Novembre.js", nome: "Word Search", tempo: null }
  ,{ file: "92.ExtensionExtractor-10Novembre.js", nome: "Extension Extractor", tempo: { minuti: 10, secondi: 20 } }
  ,{ file: "93.VowelsAndConsonants-11Novembre.js", nome: "Vowels And Consonants", tempo: { minuti: 9, secondi: 39 } }
  ,{ file: "94.EmailSignatureGenerator-12Novembre.js", nome: "Email Signature Generator", tempo: { minuti: 11, secondi: 20 } }
  ,{ file: "95.ArrayShift-13Novembre.js", nome: "Array Shift", tempo: null }
  ,{ file: "96.IsItTheWeekend-14Novembre.js", nome: "Is It The Weekend", tempo: { minuti: 8, secondi: 37 } }
  ,{ file: "97.GCD-15Novembre.js", nome: "GCD", tempo: { minuti: 8, secondi: 30 } }
  ,{ file: "98.RectangleCount-16Novembre.js", nome: "Rectangle Count", tempo: null }
  ,{ file: "99.FingerprintTest-17Novembre.js", nome: "Fingerprint Test", tempo: { minuti: 18, secondi: 46 } }
  ,{ file: "100.100Characters-18Novembre.js", nome: "100 Characters", tempo: { minuti: 14, secondi: 24 } }
  ,{ file: "101.MarkdownHeadingConverter-19Novembre.js", nome: "Markdown Heading Converter", tempo: { minuti: 19, secondi: 24 } }
  ,{ file: "102.LongestWord-20Novembre.js", nome: "Longest Word", tempo: { minuti: 4, secondi: 31 } }
  ,{ file: "103.LCM-21Novembre.js", nome: "LCM", tempo: { minuti: 16, secondi: 26 } }
  ,{ file: "104.RecipeScaler-22Novembre.js", nome: "Recipe Scaler", tempo: null }
  ,{ file: "105.CharacterCount-23Novembre.js", nome: "Character Count", tempo: null }
  ,{ file: "106.MessageValidator-24Novembre.js", nome: "Message Validator", tempo: { minuti: 5, secondi: 10 } }
  ,{ file: "107.FizzBuzz-25Novembre.js", nome: "Fizz Buzz", tempo: { minuti: 4, secondi: 47 } }
  ,{ file: "108.BuzzFizz-26Novembre.js", nome: "Buzz Fizz", tempo: null }
  ,{ file: "109.What'sMyAgeAgain-27Novembre.js", nome: "What's My Age Again", tempo: { minuti: 11, secondi: 26 } }
  ,{ file: "110.WordGuesser-28Novembre.js", nome: "Word Guesser", tempo: null }
  ,{ file: "111.BallTrajectory-29Novembre.js", nome: "Ball Trajectory", tempo: null }
  ,{ file: "112.AIDetector-30Novembre.js", nome: "AI Detector", tempo: { minuti: 14, secondi: 0 } }

  // Dicembre
  ,{ file: "113.MilesToKilometers-01Dicembre.js", nome: "Miles To Kilometers", tempo: { minuti: 1, secondi: 15 } }
  ,{ file: "114.CamelToSnake-02Dicembre.js", nome: "Camel To Snake", tempo: { minuti: 5, secondi: 46 } }
  ,{ file: "115.MarkdownOrderedListItemConverter-03Dicembre.js", nome: "Markdown Ordered List Item Converter", tempo: { minuti: 27, secondi: 24 } }
  ,{ file: "116.PermulationCount-04Dicembre.js", nome: "Permulation Count", tempo: null }
  ,{ file: "117.SymmetricDifference-05Dicembre.js", nome: "Symmetric Difference", tempo: null }
  ,{ file: "118.DateFormatter-06Dicembre.js", nome: "Date Formatter", tempo: { minuti: 13, secondi: 29 } }
  ,{ file: "119.StringCompression-07Dicembre.js", nome: "String Compression", tempo: null }
  ,{ file: "120.PoundsToKilograms-08Dicembre.js", nome: "Pounds To Kilograms", tempo: { minuti: 6, secondi: 2 } }
  ,{ file: "121.MostFrequent-09Dicembre.js", nome: "Most Frequent", tempo: { minuti: 24, secondi: 15 } }
  ,{ file: "122.MarkdownBoldParser-10Dicembre.js", nome: "Markdown Bold Parser", tempo: null }
  ,{ file: "123.RomanNumeralBuilder-11Dicembre.js", nome: "Roman Numeral Builder", tempo: { minuti: 11, secondi: 40 } }
  ,{ file: "124.InventoryUpdate-12Dicembre.js", nome: "Inventory Update", tempo: null }
  ,{ file: "125.GameOfLife-13Dicembre.js", nome: "Game Of Life", tempo: null }
  ,{ file: "126.CapitalizeIt-14Dicembre.js", nome: "Capitalize It", tempo: { minuti: 9, secondi: 50 } }
  ,{ file: "127.SpeedCheck-15Dicembre.js", nome: "Speed Check", tempo: { minuti: 3, secondi: 18 } }
  ,{ file: "128.ConsonantCount-16Dicembre.js", nome: "Consonant Count", tempo: { minuti: 7, secondi: 37 } }
  ,{ file: "129.MarkdownImageParser-17Dicembre.js", nome: "Markdown Image Parser", tempo: { minuti: 7, secondi: 10 } }
  ,{ file: "130.Checkerboard-18Dicembre.js", nome: "Checkerboard", tempo: null }
  ,{ file: "131.Pairwise-19Dicembre.js", nome: "Pairwise", tempo: null }
  ,{ file: "132.PurgeMostFrquente-20Dicembre.js", nome: "Purge Most Frquente", tempo: null }
  ,{ file: "133.DaylightHours-21Dicembre.js", nome: "Daylight Hours", tempo: null }
  ,{ file: "134.TravelingShopper-22Dicembre.js", nome: "Traveling Shopper", tempo: null }
  ,{ file: "135.ReFwdFwCount-23Dicembre.js", nome: "Re Fwd Fw Count", tempo: { minuti: 7, secondi: 26 } }
  ,{ file: "136.MarkdownImageParser-24Dicembre.js", nome: "Markdown Image Parser", tempo: { minuti: 11, secondi: 45 } }
  ,{ file: "137.SnowFlakeGenerator-25Dicembre.js", nome: "Snow Flake Generator", tempo: null }
  ,{ file: "138.SumOfDivisors-26Dicembre.js", nome: "Sum Of Divisors", tempo: { minuti: 2, secondi: 0 } }
  ,{ file: "139.RockPaperScrissors-27Dicembre.js", nome: "Rock Paper Scrissors", tempo: { minuti: 9, secondi: 0 } }
  ,{ file: "140.SCREAMING_SNAKE_CASE-28Dicembre.js", nome: "SCREAMING SNAKE CASE", tempo: { minuti: 10, secondi: 0 } }
  ,{ file: "141.TakeoffFuel-29Dicembre.js", nome: "Takeoff Fuel", tempo: { minuti: 10, secondi: 40 } }
  ,{ file: "142.SumTheString-30Dicembre.js", nome: "Sum The String", tempo: { minuti: 19, secondi: 40 } }
  ,{ file: "143.MarkdownItalicParser-31Dicembre.js", nome: "Markdown Italic Parser", tempo: null }

  // Gennaio
  ,{ file: "144.ResolutionStreak-01Gennaio.js", nome: "Resolution Streak", tempo: { minuti: 10, secondi: 27 } }
  ,{ file: "145.NthFibonacciNumber-02Gennaio.js", nome: "Nth Fibonacci Number", tempo: { minuti: 9, secondi: 30 } }
  ,{ file: "146.LeftHandedSeatAtTheTable-03Gennaio.js", nome: "Left Handed Seat At The Table", tempo: null }
  ,{ file: "147.LeapYearCalculator-04Gennaio.js", nome: "Leap Year Calculator", tempo: { minuti: 5, secondi: 4 } }
  ,{ file: "148.TirePressure-05Gennaio.js", nome: "Tire Pressure", tempo: { minuti: 5, secondi: 40 } }
  ,{ file: "149.vOwElcAsE-06Gennaio.js", nome: "Vowel Case", tempo: { minuti: 9, secondi: 40 } }
  ,{ file: "150.MarkdownUnorderedListParser-07Gennaio(nonCompletato).js", nome: "Markdown Unordered List Parser", tempo: null }
  ,{ file: "151.SortedArray-08Gennaio.js", nome: "Sorted Array", tempo: { minuti: 4, secondi: 40 } }
  ,{ file: "152.CircularPrime-09Gennaio(nonCompletato).js", nome: "Circular Prime", tempo: null }
  ,{ file: "153.TicTacToe-10Gennaio(nonCompletato).js", nome: "Tic Tac Toe", tempo: null }
  ,{ file: "154.ParForTheHole-11Gennaio.js", nome: "Par For The Hole", tempo: { minuti: 5, secondi: 5 } }
  ,{ file: "155.PlanTheCrop-12Gennaio.js", nome: "Plan The Crop", tempo: { minuti: 9, secondi: 58 } }
  ,{ file: "156.OddOrEvent-13Gennaio.js", nome: "Odd Or Event", tempo: { minuti: 0, secondi: 45 } }
  ,{ file: "157.MarkdownLinkParser-14Gennaio(nonCompletato).js", nome: "Markdown Link Parser", tempo: null }
  ,{ file: "158.ArraySwap-15Gennaio.js", nome: "Array Swap", tempo: { minuti: 0, secondi: 15 } }
  ,{ file: "159.IntegerHypotenuse-16Gennaio.js", nome: "Integer Hypotenuse", tempo: { minuti: 12, secondi: 35 } }
  ,{ file: "160.KnightMoves-17Gennaio.js", nome: "Knight Moves", tempo: null }
  ,{ file: "161.FreeShipping-18Gennaio.js", nome: "Free Shipping", tempo: { minuti: 9, secondi: 11 } }
  ,{ file: "162.EnergyConsumption-19Gennio.js", nome: "Energy Consumption", tempo: { minuti: 1, secondi: 25 } }
  ,{ file: "163.ConsonantCase-20Gennaio.js", nome: "Consonant Case", tempo: { minuti: 6, secondi: 19 } }
  ,{ file: "164.MarkdownInlineCodeParser-21Gennaio(nonCompletato).js", nome: "Markdown Inline Code Parser", tempo: null }
  ,{ file: "165.ClassAverage-22Gennaio.js", nome: "Class Average", tempo: { minuti: 12, secondi: 60 } }
  ,{ file: "166.HexValidator-23Gennaio.js", nome: "Hex Validator", tempo: { minuti: 6, secondi: 35 } }
  ,{ file: "167.BingoLetter-24Gennaio.js", nome: "Bingo Letter", tempo: { minuti: 4, secondi: 19 } }
  ,{ file: "168.ScaledImage-25Gennaio.js", nome: "Scaled Image", tempo: { minuti: 1, secondi: 22 } }
  ,{ file: "169.FizzBuzzMini-26Gennaio.js", nome: "Fizz Buzz Mini", tempo: { minuti: 2, secondi: 6 } }
  ,{ file: "170.OddOrEvenDay-27Gennaio.js", nome: "Odd Or Even Day", tempo: { minuti: 3, secondi: 22 } }
  ,{ file: "171.FlattenTheArray-28Gennaio.js", nome: "Flatten The Array", tempo: { minuti: 6, secondi: 34 } }
  ,{ file: "172.Letters-Numbers-29Gennaio.js", nome: "Letters-Numbers", tempo: null }
  ,{ file: "173.ValidPawnMoves-30Gennaio(NonCompletato).js", nome: "Valid Pawn Moves", tempo: null }
  ,{ file: "174.ZodiacFinder-31Gennaio.js", nome: "Zodiac Finder", tempo: null }

  // Febbraio
  ,{ file: "175.DigitalDetox-1Febbraio.js", nome: "Digital Detox", tempo: null }
  ,{ file: "176.GroundhogDay-2Febbraio.js", nome: "Groundhog Day", tempo: { minuti: 3, secondi: 40 } }
  ,{ file: "177.StringMirror-3Febbraio.js", nome: "String Mirror", tempo: { minuti: 0, secondi: 48 } }
  ,{ file: "178.TruncateTheText-4Febbraio.js", nome: "Truncate The Text", tempo: { minuti: 1, secondi: 43 } }
  ,{ file: "179.PocketChange-5Febbraio.js", nome: "Pocket Change", tempo: { minuti: 2, secondi: 4 } }
  ,{ file: "180.WGDayIOpengingDay-6Febbraio.js", nome: "WG Day I Openging Day", tempo: { minuti: 7, secondi: 15 } }
  ,{ file: "181.WGDayIISnowboarding-7Febbraio.js", nome: "WG Day II Snowboarding", tempo: null }
  ,{ file: "182.WGDayIIIBiathlon-8Febbraio.js", nome: "WG Day III Biathlon", tempo: { minuti: 3, secondi: 0 } }
  ,{ file: "183.WGDayIVSkiJumping-9Febbraio.js", nome: "WG Day IV Ski Jumping", tempo: { minuti: 5, secondi: 28 } }
  ,{ file: "184.WGDayVCrossCounter-10Febbraio.js", nome: "WG Day V Cross Counter", tempo: null }
  ,{ file: "185.WGDayVIFigureSkating-11Febbraio.js", nome: "WG Day VI Figure Skating", tempo: { minuti: 5, secondi: 13 } }
  ,{ file: "186.WGDayVIIFigureSkatting-12Febbraio(NonCompletato).js", nome: "WG Day VII Figure Skatting", tempo: null }
  ,{ file: "187.WDayVIIILuge-13Febbraio.js", nome: "W Day VIII Luge", tempo: null }
  ,{ file: "188.WGDayIXSkeleton-14Febbraio.js", nome: "WG Day IX Skeleton", tempo: { minuti: 8, secondi: 48 } }
  ,{ file: "189.WGDayXAlpineSki-15Febbraio.js", nome: "WG Day X Alpine Ski", tempo: { minuti: 4, secondi: 0 } }
  ,{ file: "190.WGDayXIIceHockey-16Febbraio.js", nome: "WG Day XII Ice Hockey", tempo: null }
  ,{ file: "191.WGDayXIIBobsled-17Febbraio.js", nome: "WG Day XII Bobsled", tempo: { minuti: 12, secondi: 0 } }
  ,{ file: "192.WGDayXIIINordic Combined-18Febbraio.js", nome: "WG Day XIII Nordic Combined", tempo: { minuti: 2, secondi: 55 } }
  ,{ file: "193.WGDayXIVSkiMountaineering-19Febbraio.js", nome: "WG Day XIV Ski Mountaineering", tempo: { minuti: 5, secondi: 0 } }
  ,{ file: "194.WGDayXVFreestyleSkiing-20Febbraio.js", nome: "WG Day XV Freestyle Skiing", tempo: { minuti: 5, secondi: 0 } }
  ,{ file: "195.WGDayXVICurling-21Febbraio.js", nome: "WG Day XVI Curling", tempo: null }
  ,{ file: "196.WGDayXVIIClosingDay-22Febbraio.js", nome: "WG Day XVII Closing Day", tempo: null }
  ,{ file: "197.BloodTypeCompatibility-23Febbraio.js", nome: "Blood Type Compatibility", tempo: { minuti: 17, secondi: 0 } }
  ,{ file: "198.BusinessDayCount-24Febbraio.js", nome: "Business Day Count", tempo: null }
  ,{ file: "199.SequentialDifference-25Febbraio.js", nome: "Sequential Difference", tempo: { minuti: 15, secondi: 0 } }
  ,{ file: "200.LetterAndNumberCount-26Febbraio.js", nome: "Letter And Number Count", tempo: { minuti: 8, secondi: 0 } }
  ,{ file: "201.MatrixShift-27Febbraio.js", nome: "Matrix Shift", tempo: null }
  ,{ file: "202.AddPunctuation-28Febbraio.js", nome: "Add Punctuation", tempo: { minuti: 16, secondi: 0 } }

  // Marzo
  ,{ file: "203.Flattened-01Marzo.js", nome: "Flattened", tempo: null }
  ,{ file: "204.SumTheLetters-02Marzo.js", nome: "Sum The Letters", tempo: { minuti: 10, secondi: 0 } }
  ,{ file: "205.PerfectCubeCount-03Marzo.js", nome: "Perfect Cube Count", tempo: { minuti: 20, secondi: 37 } }
  ,{ file: "206.PlayngCardValues-04Marzo.js", nome: "Playng Card Values", tempo: { minuti: 11, secondi: 35 } }
  ,{ file: "207.SmallestGap-05Marzo.js", nome: "Smallest Gap", tempo: { minuti: 25, secondi: 0 } }
  ,{ file: "208.TrailTraversal-06Marzo(NonCompletato).js", nome: "Trail Traversal", tempo: null }
  ,{ file: "209.ElementSize-07Marzo.js", nome: "Element Size", tempo: { minuti: 7, secondi: 22 } }
  ,{ file: "210.HSLValidator-08Marzo.js", nome: "HSL Validator", tempo: { minuti: 20, secondi: 0 } }
  ,{ file: "211.ArraySum-09Marzo.js", nome: "Array Sum", tempo: { minuti: 0, secondi: 19 } }
  ,{ file: "212.ArrayInsertion-10Marzo.js", nome: "Array Insertion", tempo: { minuti: 7, secondi: 0 } }
  ,{ file: "213.WordLengthConverted-11Marzo.js", nome: "Word Length Converted", tempo: { minuti: 2, secondi: 10 } }
  ,{ file: "214.DominoChainValidator-12Marzo.js", nome: "Domino Chain Validator", tempo: { minuti: 10, secondi: 42 } }
  ,{ file: "215ParkingFreeCalculator-13Marzo.js", nome: "Parking Fee Calculator", tempo: null }
  ,{ file: "216.PIDay-14Marzo.js", nome: "PI Day", tempo: { minuti: 19, secondi: 0 } }
  ,{ file: "217.CapturedRoastDetectos-15Marzo.js", nome: "Captured Roast Detectos", tempo: { minuti: 14, secondi: 14 } }
  ,{ file: "218.EvelyDivisible-16Marzo.js", nome: "Evely Divisible", tempo: { minuti: 0, secondi: 40 } }
  ,{ file: "219.AnniversaryMilestones-17Marzo.js", nome: "Anniversary Milestones", tempo: { minuti: 9, secondi: 27 } }
  ,{ file: "220.LargestNumber-18Marzo.js", nome: "Largest Number", tempo: { minuti: 2, secondi: 15 } }
  ,{ file: "221.InvertedMatrix-19Marzo.js", nome: "Inverted Matrix", tempo: { minuti: 10, secondi: 0 } }
  ,{ file: "222.EquinoxShadows-20Marzo.js", nome: "Equinox Shadows", tempo: { minuti: 22, secondi: 0 } }
  ,{ file: "223.QRDecoder-21Marzo(NonCompletato).js", nome: "QR Decoder", tempo: null }
  ,{ file: "224.CoffeRoastDetector-22Marzo.js", nome: "Coffe Roast Detector", tempo: { minuti: 4, secondi: 0 } }
  ,{ file: "225.NoConsecutiveRepeats-23Marzo.js", nome: "No Consecutive Repeats", tempo: { minuti: 4, secondi: 0 } }
  ,{ file: "226.PassingExamCount-24Marzo.js", nome: "Passing Exam Count", tempo: { minuti: 0, secondi: 45 } }
];

function formatTempo(tempo) {
  if (!tempo || tempo.minuti == null) return "Non indicato";

  const { minuti, secondi } = tempo;
  return `${minuti} minuti e ${secondi} secondi`;
}

console.log("=== Riepilogo Snack Agosto-Marzo (minuti e secondi) ===");

esercizi.forEach(e => {
  console.log(`- ${e.file} | ${e.nome} | Tempo: ${formatTempo(e.tempo)}`);
});

// module.exports = esercizi;

