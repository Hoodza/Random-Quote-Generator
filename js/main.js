var quoteWords = document.getElementById("quote-words");
var quoteAuthor = document.getElementById("quote-author");
var oldRandomNum = 0;



function generateQuoteNum () 
{
    var randomNum = Math.floor (Math.random()* 10);

    if (randomNum != oldRandomNum)
    {
        printQuote(randomNum);
    }
    else 
    {
        if (randomNum == 10 && oldRandomNum == 10)
        {
            randomNum -= 1;
            printQuote(randomNum);
        }
        else
        {
            randomNum += 1;
            printQuote(randomNum);
        }
    }
}

function printQuote (randomNum) 
{
    var str1 = "" , str2 = "";

    switch (randomNum)
    {
        case 0:
                
                str1 = "&ldquo;To live is the rarest thing in the world. Most people exist, that is all.&rdquo;";

                str2 = "― Oscar Wilde";

                quoteWords.innerHTML = str1;
                quoteAuthor.innerHTML = str2;
                break;

        case 1:
                
                str1 = "&ldquo;Be yourself; everyone else is already taken. &rdquo;";

                str2 = "― Oscar Wilde";

                quoteWords.innerHTML = str1;
                quoteAuthor.innerHTML = str2;
                break;
    
        case 2: 
                
                str1 = "&ldquo;I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.&rdquo;";

                str2 = "― Marilyn Monroe";

                quoteWords.innerHTML = str1;
                quoteAuthor.innerHTML = str2;
                break;
    
        case 3:
                
                str1 = "&ldquo;Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.&rdquo;";

                str2 = "― Albert Einstein";

                quoteWords.innerHTML = str1;
                quoteAuthor.innerHTML = str2;
                break;

        case 4: 
                
                str1 = "&ldquo;So many books, so little time.&rdquo;";

                str2 = "― Frank Zappa";

                quoteWords.innerHTML = str1;
                quoteAuthor.innerHTML = str2;
                break;

        case 5:
                
                str1 = "&ldquo;A room without books is like a body without a soul.&rdquo;";

                str2 = "― Marcus Tullius Cicero";

                quoteWords.innerHTML = str1;
                quoteAuthor.innerHTML = str2;
                break;

        case 6:
                
                str1 = "&ldquo;Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.&rdquo;";

                str2 = "― Bernard M. Baruch";

                quoteWords.innerHTML = str1;
                quoteAuthor.innerHTML = str2;
                break;

        case 7:
                
                str1 = "&ldquo;You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.&rdquo;";

                str2 = "― William W. Purkey";

                quoteWords.innerHTML = str1;
                quoteAuthor.innerHTML = str2;
                break;

        case 8:
                
                str1 = "&ldquo;You know you're in love when you can't fall asleep because reality is finally better than your dreams.&rdquo;";

                str2 = "― Dr. Seuss";

                quoteWords.innerHTML = str1;
                quoteAuthor.innerHTML = str2;
                break;

        case 9: 
                
                str1 = "&ldquo;You only live once, but if you do it right, once is enough.&rdquo;";

                str2 = "― Mae West";

                quoteWords.innerHTML = str1;
                quoteAuthor.innerHTML = str2;
                break;

        case 10:
                
                str1 = "&ldquo;Be the change that you wish to see in the world.&rdquo;";

                str2 = "― Mahatma Gandhi";

                quoteWords.innerHTML = str1;
                quoteAuthor.innerHTML = str2;
                break;

    }
    oldRandomNum = randomNum;
}
