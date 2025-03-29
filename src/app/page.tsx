import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full flex justify-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-4/5 mt-48">
                <div className="border w-full h-60 rounded-lg bg-[#19444a] flex justify-evenly items-center">
                    <Image
                        src="/join.svg"
                        alt="Join Now"
                        width={200}
                        height={200}
                    />
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-4xl font-bold text-white heading">
                            Join a Quiz Now
                        </p>
                        <Link
                            href="/"
                            className="bg-sky-200 px-2 py-1 rounded-full mt-4 heading border-b-2 border-blue-400 text-lg outline-3"
                        >
                            Join Now
                        </Link>
                    </div>
                </div>
                <div className="border w-full h-60 rounded-lg bg-[#19444a] flex justify-evenly items-center">
                    <Image
                        src="/create.svg"
                        alt="Create Now"
                        width={200}
                        height={200}
                    />
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-4xl font-bold text-white heading">
                            Create Your Quiz
                        </p>
                        <Link
                            href="/"
                            className="bg-sky-200 px-2 py-1 rounded-full mt-4 heading border-b-2 border-blue-400 text-lg outline-3"
                        >
                            Create Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
