const test = { name: "AA", age: 12, hobby: { main: "box", sub: "powerlifting" } };
// 구조분해할당
const {
  name,
  age,
  hobby: { main, sub },
} = test;
console.log(name, age, main, sub);
// spread 연산자
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

// 중첩 객체 스프레드 연산
const userProfile = {
  username: "user1",
  details: {
    email: "test",
    address: "123 Main St",
  },
};

const updatedProfile = {
  ...userProfile,
  phone: "010-1234-5678",
  ...userProfile.details,
};

// 출력
console.log(updatedProfile);
console.log(userProfile);

updatedProfile.details.email = "test22222";
console.log(updatedProfile);
console.log(userProfile);
