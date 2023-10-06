// let arr = [1,2,4,56];
 //console.log(arr.flat());

 // arr.map((item) => {
 //     item = item+1;
 //     console.log(item);
 // });

 //console.log(arr.filter(item=>item>3));

 // console.log(arr.slice(0,3))

// console.log(arr.splice(0,3,"ram"))
// console.log(arr);
// console.log(1)
// console.log(2)
// setInterval(()=>{
//     console.log(3)
//  },1000)
// console.log(4)
// console.log(5)

// let a = {
//     name: "skt",
//     roll: "234",
// }
// let b = {
//     name : "aman",
//     roll: "235"
// }
// let arr = [a,b]

// arr.map((item)=>{
//     console.log(item.name);
// })

// console.log(arr.filter(item=>item==""))
// let hexColor = console.log(Math.floor((Math.random() * 16785689)).toString(16));
// console.log("#"+ ("000000"+hexColor).slice(-6));
 
// const randomColor = () =>{
//    let hexColor = console.log(Math.floor((Math.random() * 16785689)).toString(16));
//    return ("#"+ hexColor);
// };

// const firstfunction = (callback) => {
//    setTimeout(() => {
//       console.log("1st hello");
//       callback();
//    },1000)
// };

// const secondfunction = (callback) => {
//    setTimeout(() => {
//       console.log("2nd hello");
//       callback();
//    },2000)
// };

// const thirdfunction = (callback) => {
//    setTimeout(() => {
//       console.log("3rd hello");
//       callback();
//    },2000)
// };

// firstfunction(() => {
//    secondfunction(() => {
//       thirdfunction(() => {
//          console.log("All done");
//       });
//    });
// });


// let p = new Promise((resolve, reject) => {
//    let a = 1+1;
//    if(a==2){
//       resolve("success");
//    }
//    else {
//       reject ("failed");
//    }
// });

// p.then((message) => console.log("message from promise",message)).catch((message) => {
//    console.log("rejection message", message);
// })


// const firstfunction = () => {
//    return new Promise((resolve, reject) => {
//       if(1) {
//          setTimeout(() => {
//             console.log("hello");
//             resolve();

//          }, 1000);
//       }
//       else {
//          reject("rejected");
//       }
//    });
// };

// const secfunction = () => {
//    return new Promise((resolve, reject) => {
//       if(1) {
//          setTimeout(() => {
//             console.log("hello");
//             resolve();

//          }, 2000);
//       }
//       else {
//          reject("rejected");
//       }
//    });
// };

// const thirdfunction = () => {
//    return new Promise((resolve, reject) => {
//       if(1) {
//          setTimeout(() => {
//             console.log("hello");
//             resolve();

//          }, 3000);
//       }
//       else {
//          reject("rejected");
//       }
//    });
// };

// firstfunction()
//    .then(() => secfunction())
//    .then(() => thirdfunction())
//    .then(() => console.log("all done"));

// const doAysnc = async()=> {
//    try {
//       await firstfunction()
//       await secfunction()
//       await thirdfunction()
//       console.log("done")

//    }
//    catch(err){
//       console.log(err)
//    }
// }

// doAysnc()


