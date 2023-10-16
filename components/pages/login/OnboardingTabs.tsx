import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import RegisterForm from "@/components/pages/login/RegisterForm";
import SignInForm from "@/components/pages/login/SignInForm";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import AuthButtonServer from "@/components/shared/buttons/AuthButtonServer";

function FormTabs() {
  return (
    <Card className="">
      <CardContent>
        <Tabs defaultValue="account" className=" flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="account">Sign In</TabsTrigger>
            <TabsTrigger value="password">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <SignInForm />
          </TabsContent>
          <TabsContent value="password">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <AuthButtonServer />
      </CardFooter>
    </Card>
  );
}

export default FormTabs;
