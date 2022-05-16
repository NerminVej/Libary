
  const practice1 = new Book("hobbit","tolkien","234","no");
  const practice2 = new Book("was zur adventure","nero",100,"yes");

let myLibary = [practice1,practice2];


let libaryTable = document.getElementById("Libarytable");

let newBookEntry = document.getElementById("newBookButton");

newBookEntry.addEventListener("click",addingNewBook);


function Book(name,author,pages,have_read,index){
    //Object constructor
    this.name = name
    this.author = author
    this.pages = pages
    this.have_read = have_read
    this.index = index;

    this.info = function(){
      console.log(name + " by "+author+", "+pages+" pages.")
    }
  }

  function addingNewBook(){
    addBookToLibary();
    libaryTable.innerHTML = ""
    displayMyLibary();
    }

function addBookToLibary(){
    //User input name/author/pages
    //with the user input we create a new book object
    //the new book object gets put into the myLibary Array
    let inputName = prompt("Enter the book name:");
    let inputAuthor = prompt("Enter the book author:");
    let inputPages = prompt("Enter the number of pages:");
    let inputRead = prompt("Have you read this book?");

    const bookObj = new Book(inputName,inputAuthor,inputPages,inputRead);
    
    //To add the bookObj to the libary array
    myLibary.push(bookObj)
    console.log(myLibary)
    
}

displayMyLibary()


function displayMyLibary(){
    //Counter variable so that we can start With Book1 on the side of the table
    let c = 2;
    //loop that goes over the whole array
    //myLibary[i]
    //that myLibary[i] each element of that goes into their own row
    //insertRow
    for(let i = 0; i < myLibary.length;i++){

        let bookName = myLibary[i].name;
        let bookAuthor = myLibary[i].author;
        let bookPages = myLibary[i].pages;
        let bookRead = myLibary[i].have_read;
        myLibary[i].index = i;

        console.log(myLibary[i])
        //the change read status button
        let haveReadButton = document.createElement("button");
        haveReadButton.innerHTML = "Change Read Status";
        haveReadButton.addEventListener("click",changeReadStatus);

        function changeReadStatus(){
            if(myLibary[i].have_read == "yes"){
                myLibary[i].have_read = "no";
                libaryTable.innerHTML = ""
                displayMyLibary()
            }
            else if(myLibary[i].have_read == "no"){
                myLibary[i].have_read = "yes";
                libaryTable.innerHTML = ""
                displayMyLibary()
            }
        }



        let table_row = document.createElement("tr")
        let row_cell1 = document.createElement("td");
        let row_cell2 = document.createElement("td");
        let row_cell3 = document.createElement("td");
        let row_cell4 = document.createElement("td");

        
        

        //the row deleter button
        let table_rowDelete = document.createElement("button");
        table_rowDelete.innerHTML = "X";
        



        table_rowDelete.addEventListener("click",deleteRow);

        function deleteRow(){
        //With splice(index,1) we just delete that one entry in the array
        myLibary.splice(myLibary[i].index,1);
        libaryTable.innerHTML = ""
        displayMyLibary();

        }



        if(i == 0){
            table_row.innerHTML = "Book" + 1;
        }
        else{
            table_row.innerHTML = "Book" + c;
            c++
        }
        
        row_cell1.innerHTML = "Title: " + bookName;
        row_cell2.innerHTML = "Author: " + bookAuthor;
        row_cell3.innerHTML = "Pages: " + bookPages;
        row_cell4.innerHTML = "Read? " + bookRead;
        

        table_row.appendChild(row_cell1);
        table_row.appendChild(row_cell2);
        table_row.appendChild(row_cell3);
        table_row.appendChild(row_cell4);

        table_row.appendChild(table_rowDelete);
        table_row.appendChild(haveReadButton);
        libaryTable.appendChild(table_row);
        
    }
    

}

