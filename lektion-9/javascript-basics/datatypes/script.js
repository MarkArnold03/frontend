/*
    DEKLARERING AV VARIBLER
    ---------------------------------------------------------
    Javascript använder sig av camelCase

    camelCase     firstName     js, java, c, c++
    PascalCase    FirstName     pascal, vb, c#
    snake_case    first_name    python
    kebab-case    first-name    css, powershell

    var         gobal variabel                              var firstName ="Mark"
    let         lokalt scoped deklarerad variabel           {let firstName = "Mark"}
    const       är kostant och kan inte omdeklareras        const fistName ="Mark"

    firstName = "mark"
    function test(){
        var firstName = "arnold"
        console.log(firstName)
    }

    test()

    console.log(firstName)



   DATATYPER
   JS                       C#                                               SQL
   ----------------------------------------------------------------------------------------------------
   String                  String                                           char,varchar,nvarchar,nchar,text,ntext
   Number                  byte,sbyte,short,ushort,int,long,uint,ulong      tinyint, smallint,int,bigint
   Number                  float, double,decimal                            real,decimal,money
   Boolean                 bool                                             bit    
   Object                  object
   Undefined               --
   Any






   SQL
   ----------------------------------------------------------------------------------------------------
    nvarchar(50)
    varchar(50)

    n      =      unicode/utf-8/åäö
    var    =      0 till 50, 0 till 150
    char   =      string

    char(10)    = 10        B O_ _ _ _ _ _ _ _  10bytes
    varchar(10) = 0-10      B O                 2bytes + 2bytes = 4

    nchar(10)   =10         B O_ _ _ _ _ _ _ _  20bytes
    nvarchar(10)   =0-10    B O                 4bytes + 2bytes = 6


*/

/*
    String - till för text
    -----------------------------------------------------------
    ""       citat                                "";=> text
    ''       enkelfnuttar                         '';=> enskilt
    ``       back-ticks(shift + ´)                $"";

*/
let firstName = "MARK"
let lastName ='Arnold-Walusimbi'
let email = `markarnold@mark.com`
let address = `kungsgatan 2`
let city = 'Uppsala';

var sentence = "Hej jag heter ... och jag bor på ... i ...."
var sentence = "Hej jag heter " + firstName + " " + lastName + " och jag bor på " + address + " i " + city + "."
var sentence = `Hej jag heter ${firstName} ${lastName} och jag bor på ${address} i ${city}.`

let category = "Computers"
let subCategory = "Laptops"
var apiUrl = "http://localhost:7071/api/products?category=" + category
var apiUrl = "http://localhost:7071/api/products?category=" + category +"&subcategory=" + subCategory

var modifiedApiUrl = apiUrl.toLocaleUpperCase()
var modifiedApiUrl = apiUrl.toLocaleLowerCase()

var count = apiUrl.length
var trimmed = apiUrl.trim()

//NUMBER - till för tal
var value = 1
var value = 1.1
var value = 123e-5
var value = 123e5
var value = 0.123456789012345678
var value = 9234567890123456
var value = 9999999999999999

//BOOLEAN - sant eller falskt
var isActive = true
var isActive = false

//NULL och Underfined
var ref                 // <=undefined
var ref = null          // <=object
var ref = undefined     // <=undefined