"use client";

import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Image from "next/image";
import {useForm} from "react-hook-form";
import {RegisterSchema} from "@/lib/auth";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import React from "react";
import {cn} from "@/lib/utils";
import {ArrowRight} from "lucide-react";
import {useToast} from "@/components/ui/use-toast";
import {motion} from "framer-motion";
import {Toaster} from "@/components/ui/toaster";
import {signUpUser} from "@/lib/db";

type Input = z.infer<typeof RegisterSchema>;

export default function RegisterForm() {
  const {toast} = useToast();
  const [formStep, setFormStep] = React.useState(0);

  const form = useForm<Input>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      comfirmPassword: "",
    },
  });

  async function onSubmit(data: Input) {
    if (data.comfirmPassword !== data.password) {
      toast({
        title: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    // Destructuring the form data.
    const {email, password, username} = data;

    // Calling signUpUser function.
    try {
      const response = await signUpUser(email, password, username);

      // Handle the response as necessary. For example:
      if (response) {
        toast({
          title: "Registration Successful!",
          variant: "default",
        });
        console.log("User registration successful:", response);
      } else {
        toast({
          title: "Registration Failed!",
          description: response.msg,
          variant: "destructive",
        });
        console.log("User registration failed.");
      }
    } catch (error: any) {
      toast({
        title: "An error occurred during registration.",
        description: error.message,
        variant: "destructive",
      });
      console.error("Error during registration:", error.message);
    }
  }

  return (
    <div>
      <Toaster />
      {/* // my style div */}
      <div className="flex justify-center">
        <Card className="w-[300px]  border-none md:w-[500px] max-w-screen-md">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription className="text-red-500">
              Email register is depricated. Please use GitHub.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 relative overflow-x-hidden"
              >
                <motion.div
                  className={cn("space-y-3", {
                    // hidden: formStep === 1,
                  })}
                  // formStep == 0 => translateX == 0
                  // formStep == 1 => translateX == -100%
                  animate={{
                    translateX: `-${formStep * 100}%`,
                  }}
                  transition={{
                    ease: "easeInOut",
                  }}
                >
                  {/* Name */}
                  {/* <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormDescription>This your full name.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                  {/* username */}
                  <FormField
                    control={form.control}
                    name="username"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your username" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormDescription>
                          Your email will not be shared with anyone.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                <motion.div
                  className={cn("space-y-3 absolute right-0 left-0 top-0", {
                    // hidden: formStep === 0,
                  })}
                  animate={{
                    //formStep == 0 => translateX == 100%
                    //formStep == 1 => translateX == 0
                    translateX: `${100 - formStep * 100}%`,
                  }}
                  // defult style prevents the animation from running on page load.
                  style={{
                    translateX: `${100 - formStep * 100}%`,
                  }}
                  transition={{
                    ease: "easeInOut",
                  }}
                >
                  {/* Password */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your password"
                            {...field}
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Comfirm Password */}
                  <FormField
                    control={form.control}
                    name="comfirmPassword"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Comfirm Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Comfirm your password"
                            {...field}
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                <div className="flex gap-2">
                  <Button
                    type="submit"
                    className={cn({
                      hidden: formStep === 0,
                    })}
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    className={cn({
                      hidden: formStep === 1,
                    })}
                    variant={"outline"}
                    onClick={() => {
                      // validate form before going to next step
                      form.trigger(["email", "username"]);
                      const emailState = form.getFieldState("email");
                      // const nameState = form.getFieldState("name");
                      const usernameState = form.getFieldState("username");

                      if (!emailState.isDirty || emailState.invalid) return;
                      if (!usernameState.isDirty || usernameState.invalid)
                        return;
                      // if (!nameState.isDirty || nameState.invalid) return;
                      setFormStep(1);
                    }}
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setFormStep(0);
                    }}
                    className={cn({
                      hidden: formStep === 0,
                    })}
                    variant={"outline"}
                  >
                    Go Back
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
