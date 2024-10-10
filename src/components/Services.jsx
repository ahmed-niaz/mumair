import uiux from '../assets/services/ui-ux.png'
import webD from '../assets/services/web-design.png'
import graphD from '../assets/services/graphic-design.png'
import appD from '../assets/services/app-design.png'
const Services = () => {
  return (
    <main className="my-24 font-poppins max-w-[1480px] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-8xl">Services</h1>
        <p className="w-3/5 text-center">
          Design process involves thorough research, wireframing, prototyping,
          and user testing to ensure that each product not only looks appealing
          but also provides meaningful interactions.
        </p>
      </div>

      <div className='flex gap-6 my-12'>
        <div className="card card-compact bg-[#F8F8F8] w-96 shadow-xl">
          
          <div className="card-body my-12 ">
            <img className='h-[70px] w-[70px]' src={uiux} alt={uiux} />
            <h2 className="card-title">UI/UX</h2>
            <p>Transform concepts into wireframes and interactive prototypes, enabling early feedback and iterative design improvements.</p>
          
          </div>
        </div>
        <div className="card card-compact bg-[#F8F8F8] w-96 shadow-xl">
          
          <div className="card-body my-12 ">
            <img className='h-[70px] w-[70px]' src={webD} alt={webD} />
            <h2 className="card-title">Web Design</h2>
            <p>Transform concepts into wireframes and interactive prototypes, enabling early feedback and iterative design improvements.</p>
          
          </div>
        </div>
        <div className="card card-compact bg-[#F8F8F8] w-96 shadow-xl">
          
          <div className="card-body my-12 ">
            <img className='h-[70px] w-[70px]' src={appD} alt={appD} />
            <h2 className="card-title">App Design</h2>
            <p>Transform concepts into wireframes and interactive prototypes, enabling early feedback and iterative design improvements.</p>
          
          </div>
        </div>
        <div className="card card-compact bg-[#F8F8F8] w-96 shadow-xl">
          
          <div className="card-body my-12 space-y-4">
            <img className='h-[70px] w-[70px]' src={graphD} alt={graphD} />
            <h2 className="card-title">Graphic Design</h2>
            <p>Transform concepts into wireframes and interactive prototypes, enabling early feedback and iterative design improvements.</p>
          
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
