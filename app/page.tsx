import Marketing from "@/components/Marketing";
import Navbar from "@/components/Navbar";
import { SignupFormDemo } from "@/components/SignInForm";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div>
        <Marketing/>
      </div>
    </main>
  );
}
