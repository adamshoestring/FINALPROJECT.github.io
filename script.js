let books = [
	{title:'The Reckoning', author:'John Grisham', year:2018, cover:'https://is4-ssl.mzstatic.com/image/thumb/Publication125/v4/cb/7a/2f/cb7a2f8a-57a2-919f-af20-b0d8b1f70021/source/225x225bb.jpg'},
	{title:'Killing Floor', author:'Lee Child', year:1997, cover:'https://is1-ssl.mzstatic.com/image/thumb/Publication71/v4/3d/f9/22/3df922f5-17c9-c182-1264-a875908089cd/source/225x225bb.jpg'},
	{title:'Every Breath', author:'Nicholas Sparks', year:2018, cover:'https://is3-ssl.mzstatic.com/image/thumb/Publication128/v4/c1/5f/52/c15f52b6-2519-6a96-34cf-92b1e1434efc/source/225x225bb.jpg'},
	{title:'Elevation', author:'Stephen King', year:2018, cover:'https://is5-ssl.mzstatic.com/image/thumb/Publication118/v4/c7/3b/f0/c73bf0b5-d318-e3c9-a186-3ca506e4f8d8/source/225x225bb.jpg'},
	{title:'Fun Home', author:'Alison Bechdel', year:2007, cover:'https://is2-ssl.mzstatic.com/image/thumb/Publication3/v4/b1/4e/13/b14e1324-9adb-0df4-0b5d-4a692d1714cd/source/225x225bb.jpg'},
	{title:'Nine Pints', author:'Rose George', year:2018, cover:'https://is5-ssl.mzstatic.com/image/thumb/Publication118/v4/f0/bc/45/f0bc453c-7bac-e676-8bdf-8f0c3091b946/source/225x225bb.jpg'},
	{title:'Antigone', author:'Sophocles', year:2012, cover:'https://is3-ssl.mzstatic.com/image/thumb/Publication/v4/49/fc/4c/49fc4cb2-7706-dd12-46e3-a312e99e26a0/source/225x225bb.jpg'},
	{title:'Fooling Houdini', author:'Alex Stone', year:2012, cover:'https://is5-ssl.mzstatic.com/image/thumb/Publication3/v4/5e/24/4b/5e244b6d-1770-cc84-d022-e8d5a2f9798d/source/225x225bb.jpg'},
	{title:'Red Notice', author:'Bill Browder', year:2015, cover:'https://is5-ssl.mzstatic.com/image/thumb/Publication69/v4/d3/01/f2/d301f229-6297-d5ad-d7c2-df089bfd4552/source/225x225bb.jpg'},
	{title:'Paperless', author:'David Sparks', year:2012, cover:'https://is4-ssl.mzstatic.com/image/thumb/Publication/v4/cd/dd/81/cddd810b-f3f2-fca4-6865-fcc164308d8f/source/225x225bb.jpg'}
	
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
	
	document.getElementById('quantityDisplay').innerHTML = ' _QUANTITY ' + books.length;

	document.getElementById('display').innerHTML = '';
	for(let i = 0; i < books.length; i++){
		document.getElementById('display').innerHTML += `
			<h2> 
				<img src="${books[i].cover}">
				${books[i].title} by ${books[i].author} in ${books[i].year} 
				<input type="button" value="READ" onclick="tapButton(this)">
				<input type="button" value="DELETE" onclick="deleteBook(${i})" />
				<input type="button" value="CHECKOUT">			
			</h2>

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

function checkOut(){
	
}













