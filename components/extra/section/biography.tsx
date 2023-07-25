import AnimateText from "@/components/standard/animateText";
import Counter from "@/components/standard/counter";
import Image from "next/image";
import UserCard from "../card/userCard";

const Biography = () => {
    return (
        <>
            <AnimateText className="text-xl sm:text-4xl xl:text-6xl text-center font-bold">
                Code with Passion!
            </AnimateText>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="order-2 md:order-1">
                    <h5 className="uppercase font-semibold text-lg">Biography</h5>
                    <div className="grid gap-3 mt-3">
                        <p>
                            Hi I&apos;m <span className="font-bold">Arpit</span> as a frontend developer, I am deeply
                            passionate about creating engaging and user-centric digital experiences. With a keen eye for
                            design and a strong command of web technologies, I strive to bring ideas to life through
                            clean and elegant code.
                        </p>

                        <p>
                            With several years of experience in frontend development, I have honed my skills in HTML,
                            CSS, JavaScript, and various frontend frameworks. I am constantly staying up-to-date with
                            the latest industry trends and best practices, always seeking to expand my knowledge and
                            enhance my abilities.
                        </p>

                        <p>
                            Beyond technical expertise, I possess a strong sense of collaboration and a commitment to
                            delivering high-quality work within deadlines. Ultimately, my passion for frontend
                            development drives me to continually push boundaries, create meaningful experiences, and
                            contribute to the ever-evolving digital landscape.
                        </p>
                    </div>
                </div>
                <div className="order-1 md:order-2 mx-auto">
                    <UserCard>
                        <Image
                            alt=""
                            src="/assets/images/resumepic.jpg"
                            width={300}
                            height={200}
                            className="rounded-lg"
                        />
                    </UserCard>
                </div>
                <div className="order-3 flex xl:flex-col justify-between md:col-span-2 xl:col-span-1">
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl xl:text-6xl font-bold">
                            <div className="flex justify-center">
                                <Counter totalCount={3} />+
                            </div>
                        </div>
                        <p className="text-2xl">Satisfied Clients</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl xl:text-6xl font-bold">
                            <div className="flex justify-center">
                                <Counter totalCount={5} />+
                            </div>
                        </div>
                        <p className="text-2xl">Projects Completed</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl xl:text-6xl font-bold">
                            <div className="flex justify-center">
                                <Counter totalCount={1} />+
                            </div>
                        </div>
                        <p className="text-2xl">Years Of Experience</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Biography;
