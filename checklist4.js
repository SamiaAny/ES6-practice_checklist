//optional
/**[অপশনাল]

১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 

 */
const school = {
    student : 3000,
    faculty : {
        name : 'engineering',
        deptNum : 4,
        dept : ['cse','eee','ete']
    },
    teacher : 300
};

// console.log(school?.student?.faculty?.dept??"not valid");
console.log(school?.student?.faculty?.dept);

/**ekhaen ?. dia check kora hoi schooler vitor student er vitor faculty er vitor dept ache kina jodi na thake tahole undefine dekhabe jodi?. na dei tahole puro program e crash korbe error dekhabe .thats why we can use it to run every code and if there any prblem it will show undefine */