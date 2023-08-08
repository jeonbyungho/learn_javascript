// 📹 https://youtu.be/aoQSOZfz3vQ
// 🙂 동기적으로 작동하는 코드 함수
function users(){
   // 만약에 요청 시, 10초 이상 걸리는 경우..
   return '유저';
}

// 😨 코드를 한 줄씩 읽어내는데, 요청이 오래걸리는 경우,
//    다른 코드까지 그만큼 대기하게 되어, 프로그램이 지연될 수 있다.
const user = users();
console.log(user);

// 😀 그러므로 이러한 코드블럭들은 비동기적으로 실행해줘야한다.
// 🤙 자바스크립트에서는 Promise로 구현한다.

/* 😗 Promise의 상태 (PromiseState)
      🤔 pending : 지연 상태
      😄 resolve : 완료 상태
      💀 reject : 실패 상태
*/

// 🤙 Promise 함수

// function Promise<any>
function promiseUsers(){
   // Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: '약속해' ...
   return new Promise( (resolve, reject) => {
      resolve('약속해');
   });
}

const molu = promiseUsers();
console.log(molu);

// 🫰 async 함수 = Promise 함수

// function Promise<string>
async function asyncUsers(){
   // Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: '믿어줘' ...
   return '믿어줘';
}

const aru = asyncUsers();
console.log(aru);

// ✋ await 키워드

// function Promise<string>
async function getSed(){
   return '😭';
}

// function Promise<string>
async function getSmile(){
   return '😄';
}

// 가독성을 떨어트리는 promise의 특유의 callback 지옥에서 해방시켜준다.
// function Promise<string>
async function getPeople(){
   const sed = await getSed();
   const smile = await getSmile();
   return `${sed} + ${smile}`;
}

getPeople().then(console.log);