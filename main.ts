import { Observable, Observer } from 'rxjs';
let numbers = [1, 5, 10, 15, 20];
//let source=Observable.from(numbers);
let source = Observable.create(observer => {
    for (let n of numbers) {
        observer.next(n);

    }
    observer.complete();
}).map(n => n * 3)
    .filter(n => n > 4)
source.subscribe(
    value => console.log(`value:${value}`),
    e => console.log(`error:${e}`),
    () => console.log('complete')
);


let output = document.getElementById('output');
let button = document.getElementById('button');
let click = Observable.fromEvent(button, "click");
function load(url: string) {
    return Observable.create(Observer => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            if(xhr.status === 200){
                let data = JSON.parse(xhr.responseText);
                Observer.next(data);
                Observer.complete();
            }else{
                Observer.error(xhr.statusText);
            }
        });
        xhr.open("GET", url);
        xhr.send();


    })
}
function renderMovies(movies){
    movies.forEach(element => {
                let div = document.createElement("div");
                div.innerText = element.title;
                output.appendChild(div);
    });
}
//load("movies.json").subscribe(renderMovies);

// click.flatMap(e=> load("movies.json"))
//     .subscribe(o=>console.log(o));


click.flatMap(e=> load("movies.json"))
    .subscribe(
    renderMovies,
    e => console.log(`error:${e}`),
    () => console.log('complete')
);
