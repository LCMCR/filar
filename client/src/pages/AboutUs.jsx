import { About1, About2, About3 } from "../assets/Assets";

const AboutUs = () => {
    return (
        <div className="py-10">
            <div className="flex flex-col font-titleFont items-center gap-4 px-6">
                <h1 className="text-xl border-stone-400 border-t-2 border-b-2 text-stone-600 py-2 w-80 text-center">FILAR</h1>
                <p className="max-w-[850px] font-bodyFont text-stone-600 text-center hidden md:block">
                    Established with a vision to redefine fashion norms, FILAR embodies the essence of modern elegance, offering a diverse range of apparel that celebrates individuality and empowers self-expression.
                </p>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-center text-center items-center order-1 mb-4">
                    <h3 className="font-titleFont font-bold uppercase">Our focus</h3>
                    <p className="font-titleFont max-w-[50%] m-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum.
                    </p>
                </div>
                <div className="order-2  mb-4">
                    <img src={About1} alt="imgAbout1" />
                </div>
                <div className="order-4 md:order-3  mb-4">
                    <img src={About2} alt="imgAbout2" />
                </div>
                <div className="flex flex-col justify-center text-center items-center order-3  md:order-4 mb-4">
                    <h3 className="font-titleFont font-bold uppercase">Our challenge</h3>
                    <p className="font-titleFont max-w-[50%] m-4">
                        Diam volutpat commodo sed egestas egestas fringilla. Sem fringilla ut morbi tincidunt augue interdum. Sed odio morbi quis commodo odio aenean. 
                    </p>
                </div>
                <div className="flex flex-col justify-center text-center items-center order-5 mb-4">
                    <h3 className="font-titleFont font-bold uppercase">Our collections</h3>
                    <p className="font-titleFont max-w-[50%] m-4">
                        Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ut aliquam purus sit amet luctus venenatis.
                    </p>
                </div>
                <div className="order-6 mb-4">
                    <img src={About3} alt="imgAbout3" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;