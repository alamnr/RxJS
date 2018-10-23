import { Observable } from 'rxjs'
import { share } from 'rxjs/operators'
import { fromEvent } from 'rxjs'
import { Subject } from 'rxjs'
import { BehaviorSubject } from 'rxjs'
import { ReplaySubject } from 'rxjs'

console.log(Observable);
//var observable = Observable.create();
// var observable = Observable.create(function subscribe(observer:any) {
//     observer.next('Hey guys!')
// })

// var observable = Observable.create((observer:any) => {
//     observer.next('Hey guys!')
// })

// observable.subscribe((x:any) => addItem(x));

/*
var observable = Observable.create((observer: any) => {
    try {
        observer.next('Hey Guys');
        observer.next('How are you?');
        setInterval(() => {
            observer.next('I am good')
        }, 2000)
       // observer.complete();
       // observer.next('This will not send');

    }
    catch (err) {
        observer.error(err);
    }

});//.pipe(share()); */

// setTimeout(() => {
//     subscription_1.unsubscribe();
// }, 6001);

/*
setTimeout(() => {
    let sub_2 = observable.subscribe(
        (x:any)=>addItem('Sub-2:'+x)
    )
}, 1000);

let subscription_1 = observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Complete')
)   */

// let subscription_2 = observable.subscribe(
//     (x: any) => addItem(x),
//     (error: any) => addItem(error),
//     () => addItem('Complete')
// )
// subscription_1.add(subscription_2);

/*
let observable = fromEvent(document,'mousemove');
setTimeout(() => {
    let subscription = observable.subscribe(
        (x:any) => addItem(x)
    )
}, 2000);

*/
function addItem(val: any) {
    let node = document.createElement('li');
    //let textNode = document.createTextNode('x-'+val.x+',y-'+val.y);
    let textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
    //document.getElementById('output').innerHTML ='x-'+val.x+',y-'+val.y;
}

/*
var subject = new Subject();

subject.subscribe(
    data => addItem('Observer-1: '+ data),
    err => addItem(err),
    () => addItem('Observer-1 Completed')
)

subject.next('The first thing has been sent');

var observer2 = subject.subscribe(
    data => addItem('Observer 2: '+ data)
)

subject.next('The second thing has been sent')
subject.next('A third thing has been sent')

observer2.unsubscribe();

subject.next('A final thing has been sent')
*/

//var subject = new BehaviorSubject('First');
/*
var subject = new ReplaySubject(2);
subject.subscribe(
    data => addItem('Observer-1: '+ data),
    err => addItem(err),
    () => addItem('Observer-1 Completed')
)

subject.next('The first thing has been sent');
subject.next('Another thing has been sent')
// Add this
subject.next('...Observer 2 is about to subscribe...')

var observer2 = subject.subscribe(
    data => addItem('Observer 2: '+ data)
)

subject.next('The second thing has been sent')
*/

/*
var subject = new ReplaySubject(30, 200)

subject.subscribe(
    data => addItem('Observer 1: '+ data),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
)

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
    var observer2 = subject.subscribe(
        data => addItem('Observer 2: '+ data)
    )
    clearInterval(int);
}, 500);

*/

/*
import { AsyncSubject } from 'rxjs'

var subject = new AsyncSubject()

subject.subscribe(
    data => addItem('Observer 1: '+ data),
    () => addItem('Observer 1 Completed')
)

var i = 1;
setInterval(() => subject.next(i++), 100);

setTimeout(() => {
    var observer2 = subject.subscribe(
        data => addItem('Observer 2: '+ data)
    )
    subject.complete();
}, 500);  */

/*

import { merge } from 'rxjs/operators'

var observable = Observable.create((observer:any)=>{
    observer.next('Hey Guys');
})

var observable_2 = Observable.create((observer:any)=>{
    observer.next('How is it going?');
})

var newObs = merge(observable, observable_2);

//newObs.subscribe((x:any)=>addItem(x));

*/
/*
import { map } from 'rxjs/operators';

    Observable.create((observer:any) => {
        observer.next('Hey guys!')
    })
    .pipe(map((val:any) => val.toUpperCase()))
    .subscribe((x:any) => addItem(x));

    */

    /*
    import { pluck } from 'rxjs/operators'
    import { from }  from 'rxjs'

    from(
        [{ first: 'Gary', last: 'Simon', age: '34'},
        { first: 'Jane', last: 'Simon', age: '34'},
        { first: 'John', last: 'Simon', age: '34'},
])
.pipe(pluck('first'))
.subscribe((x:any) => addItem(x));
*/


import { interval } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

var observable1 = Observable.create((data:any) => {
    var i = 1
    setInterval(() => {
        data.next(i++)
    }, 1000)
})

var observable2 = new Subject();

setTimeout(() => {
    observable2.next('Hey!')
}, 3000)

var newObs = observable1.pipe(skipUntil(observable2))

//newObs.subscribe((x:any) => addItem(x));
