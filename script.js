let books = [
	{title:'The Reckoning', author:'John Grisham', year:2018, cover:'https://is4-ssl.mzstatic.com/image/thumb/Publication125/v4/cb/7a/2f/cb7a2f8a-57a2-919f-af20-b0d8b1f70021/source/225x225bb.jpg'},
	{title:'Killing Floor', author:'Lee Child', year:1997, cover:'https://is1-ssl.mzstatic.com/image/thumb/Publication71/v4/3d/f9/22/3df922f5-17c9-c182-1264-a875908089cd/source/225x225bb.jpg'} 
	
];






function addBook(){
	let bookName = document.getElementById('bookName').value;
	let bookAuthor = document.getElementById('bookAuthor').value;
	let bookYear = document.getElementById('bookYear').value;
	let bookCover = document.getElementById('bookCover').value;

	books.push({
		title: bookName,
		author: bookAuthor,
		year: bookYear,
		cover: bookCover
	});

	displayBooks();
} 


function displayBooks(){
	
	document.getElementById('quantityDisplay').innerHTML = ' QUANTITY ' + books.length;

	document.getElementById('display').innerHTML = '';
	for(let i = 0; i < books.length; i++){
		document.getElementById('display').innerHTML += `
			<h1> 
				${books[i].title} by ${books[i].author} in ${books[i].year} 
				<img src="${books[i].cover}"> <input type="button" value="READ" onclick="tapButton(this)">
				<input type="button" value="DELETE" onclick="deleteBook(${i})" />
			</h1>

			<hr>
		`;
	}
	
}

function tapButton(readButton){
	
	if (readButton.value === 'READ') {
		readButton.value = 'NOT READ';
	}else{
		readButton.value = 'READ';
	}
}



function deleteBook(index){
	
	books.splice(index, 1);

	displayBooks();
}

function sortBooks(){
	books.sort(function(a, b){
		return a.title > b.title
	});
	displayBooks();
}















