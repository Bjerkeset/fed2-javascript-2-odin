// "use client"

 

// import React from "react";

// import { FormProvider } from "react-hook-form";

// import { useForm } from "react-hook-form";

// import { FormField } from "@/components/ui/form";

// import { FormItem } from "@/components/ui/form";

// import { FormLabel } from "@/components/ui/form";

// import { FormControl } from "@/components/ui/form";

// import { FormDescription } from "@/components/ui/form";

// import { FormMessage } from "@/components/ui/form";

// import { Input } from "./ui/input";

// import { Button } from "./ui/button";

 

// const LoginForm = () => {

//   const form = useForm();

//   return (

//     <FormProvider {...form}>

//       <div className="min-h-screen flex items-center justify-center bg-gray-100">

//         <div className="bg-white border rounded-lg p-8 shadow-md">

//           <form

//                       className="w-full max-w-lg"

//                       onSubmit={form.handleSubmit((data) => console.log(data))}

//           >

//             <FormField

//               control={form.control}

//               name="username"

//               render={({ field }) => (

//                 <FormItem className="mb-4">

//                   <FormLabel className="block text-gray-700 text-sm font-bold mb-2">

//                     Username

//                   </FormLabel>

//                   <FormControl>

//                     <Input

//                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

//                       placeholder="shadcn"

//                       {...field}

//                     />

//                   </FormControl>

//                   <FormDescription className="text-gray-600 text-xs italic">

//                     This is your public display name.

//                   </FormDescription>

//                   <FormMessage />

//                 </FormItem>

//               )}

//             />

 

//             {/* Add another input field */}

//             <FormField

//               control={form.control}

//               name="password"

//               render={({ field }) => (

//                 <FormItem className="mb-4">

//                   <FormLabel className="block text-gray-700 text-sm font-bold mb-2">

//                     Password

//                   </FormLabel>

//                   <FormControl>

//                     <Input

//                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

//                       placeholder="********"

//                       type="password"

//                       {...field}

//                     />

//                   </FormControl>

//                   <FormDescription className="text-gray-600 text-xs italic">

//                     Enter your password.

//                   </FormDescription>

//                   <FormMessage />

//                 </FormItem>

//               )}

//             />

 

//             <div className="flex items-center justify-between">

//               <Button

//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

//                 type="submit"

//               >

//                 Submit

//               </Button>

//             </div>

//           </form>

//         </div>

//       </div>

//     </FormProvider>

//   );

// };

 

// export default LoginForm;