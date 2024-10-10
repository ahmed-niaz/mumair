const ContactMe = () => {
  return (
    <main className="font-poppins my-24 max-w-[1480px] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-6xl mb-6">Lets Design Together</h1>
        <p className="w-3/5 text-center">
          Design process involves thorough research, wire framing, prototyping,
          and user testing to ensure that each product not only looks appealing
          but also provides meaningful interactions.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        <input
          type="text"
          placeholder="Type here"
          className="input border-[#AFAFAF] w-full max-w-2xl bg-[#F8F8F8]"
        />
        <button className="btn bg-orange text-neutral-50">
          Contact Me
        </button>
      </div>
    </main>
  );
};

export default ContactMe;
