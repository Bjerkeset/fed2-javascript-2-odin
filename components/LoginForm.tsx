// "use client";

// import React, {useState} from "react";

// import {FormProvider} from "react-hook-form";

// import {useForm} from "react-hook-form";

// import {FormField} from "@/components/ui/form";

// import {FormItem} from "@/components/ui/form";

// import {FormLabel} from "@/components/ui/form";

// import {FormControl} from "@/components/ui/form";

// import {FormDescription} from "@/components/ui/form";

// import {FormMessage} from "@/components/ui/form";

// import {Input} from "./ui/input";

// import {Button} from "./ui/button";

// import {createClient} from "@supabase/supabase-js";

// import Link from "next/link";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

// const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// const supabase = createClient(supabaseUrl, supabaseApiKey);

// const LoginForm = () => {
//   const form = useForm();

//   const [isSubmitted, setSubmitted] = useState(false);

//   const [error, setError] = useState(null);

//   // const passwordPattern = /^(?=.*[A-Z])/;
//   const passwordPattern = /^(?=.*[A-Z])/;
//   const handleSubmit = async (data) => {
//     if (!passwordPattern.test(data.password)) {
//       setError("Password must contain at least one capital letter.");

//       return;
//     }

//     try {
//       const {data: insertedData, error} = await supabase

//         .from("users")

//         .upsert([data]);

//       if (error) {
//         console.error("Error inserting data:", error);

//         setError("Error submitting the form. Please try again.");
//       } else {
//         console.log("Data inserted successfully:", insertedData);

//         setSubmitted(true);
//       }
//     } catch (error) {
//       console.error("Error:", error);

//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <FormProvider {...form}>
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="bg-white border rounded-lg p-8 shadow-md">
//           {isSubmitted ? (
//             <div>
//               <p>You are now registered!</p>

//               <Link
//                 href={"/profile/${user_id}"}
//                 className="font-semibold text-decoration: underline"
//               >
//                 go to your profile
//               </Link>
//             </div>
//           ) : (
//             <form
//               className="w-full max-w-lg"
//               onSubmit={form.handleSubmit((data) => handleSubmit(data))}
//             >
//               {error && <div className="text-red-500">{error}</div>}

//               <FormField
//                 control={form.control}
//                 name="username"
//                 render={({field}) => (
//                   <FormItem className="mb-4">
//                     <FormLabel className="block text-gray-700 text-sm font-bold mb-2">
//                       Username
//                     </FormLabel>

//                     <FormControl>
//                       <Input
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
//                         placeholder="user@gmail.com"
//                         required
//                         {...field}
//                       />
//                     </FormControl>

//                     <FormDescription className="text-gray-600 text-xs italic">
//                       This is your public display name.
//                     </FormDescription>

//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="password"
//                 render={({field}) => (
//                   <FormItem className="mb-4">
//                     <FormLabel className="block text-gray-700 text-sm font-bold mb-2">
//                       Password
//                     </FormLabel>

//                     <FormControl>
//                       <Input
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
//                         placeholder="********"
//                         required
//                         type="password"
//                         {...field}
//                       />
//                     </FormControl>

//                     <FormDescription className="text-gray-600 text-xs italic">
//                       Password needs to contain at least one capital letter.
//                     </FormDescription>

//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <div className="flex items-center justify-between">
//                 <Button
//                   className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                   type="submit"
//                 >
//                   Submit
//                 </Button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </FormProvider>
//   );
// };

// export default LoginForm;
