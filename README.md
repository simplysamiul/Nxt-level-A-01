## What are some differences between interfaces and types in TypeScript?
```

1) TypeScript এর মধ্যে types এবং interface অনেকটা একভাবেই কাজ করে। অল্প কিছু পার্থক্য আছে এগুলোর মধ্যে। নিম্নে উল্লেখ করা হলো : 

interface এবং types দুটোই object এর মতো করে উল্লেখ করতে হয় কিন্তু সিনটেক্সট কিছুটা ভিন্ন রকম:

interface User {
  name: string;
}

type User = {
  name: string;
}


2) একই নাম এ একাধিক interface তৈরী করলে সবগুলো একটি ইন্টারফেস হয়ে যাবে। কিন্তু types এ একই নাম এ একটির বেশি types উল্লেখ করা যাবে না। 

3) interface সাধারণত class এর ক্ষেত্রে বেশি ব্যবহার করা হয়ে থাকে। 

```

## What is the use of the keyof keyword in TypeScript? Provide an example.

```

TypeScript এর মধ্যে any, unknown, এবং never হচ্ছে তিনটি বিশেষ type।  নিম্নে এগুলোর বর্ণনা দেয়া হলো : 

any: any হচ্ছে এমন একটি type যেখানে type চেক করা হয় না। যেকোনো ধরণের type এখানে ব্যবহার করা যায় । TypeScript এখানে কোনো error দেয় না।  
example: let x: any; let arr:any[]; 


unknown: unknown হচ্ছে এমন একটি type যেখানে আগে থেকে কি ধরণের type হবে সেটা ধারণা করা হয় না। 
example: let y: unknown;


never: never হচ্ছে একটি type যেটা শুধু মাত্র তখন ব্যবহার করা হয় যখন নিশ্চিত ভাবে বলা যায় যে কোনো function এ কখনোই কিছু return করা হবে না । 
example: function error(msg: string): never {
  throw new Error(msg);
}

```
