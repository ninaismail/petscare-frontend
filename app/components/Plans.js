const Plans = () => {
    const plans = [
        {
            id: 1,
            name: 'Friendly pack',
            price: 100,
            care: 'Day care',
            service_days: 15,
            features: [
                'Pet shower',
                'Intensive Checkup',
                'Grooming',
                'Hair & Nail Cut'
            ]
        },
        {
            id: 2,
            name: 'Exclusive pack',
            price: 175,
            care: '2 X care',
            service_days: 15,
            features: [
                "Pet shower",
                "Intensive Checkup",
                "Grooming",
                "Hair & Nail Cut",
                "Control Hair falling",
                "Fresh Snack",
                "Pet park & games"
            ]
        },
        {
            id: 3,
            name: 'Family pack',
            price: 200,
            care: '4 X care',
            service_days: 15,
            features: [
                'Pet shower',
                'Intensive Checkup',
                'Grooming',
                'Hair & Nail Cut',
                'Control Hair falling',
                'Fresh Snack',
                'Pet park & games'
            ]
        }
    ];
    
    return (
        <section className="pt-40 bg-white lg:h-screen">
            <div className="w-11/12 h-full mx-auto space-y-10 sm:w-10/12">
                <div className="flex flex-col items-center justify-center gap-10">
                    <h1 class="lg:text-lg text-primary font-[memoire] text-center">Pricing Plan</h1>
                    <h2 class="text-secondary text-center 2xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-[memoire]">Special Packages</h2>
                    <p class="tracking-wide font-[montserrat] lg:w-1/3 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.</p>
                </div>
                <ul className="flex flex-wrap items-center justify-center lg:mt-4 list-style-none gap-y-6">
                {Array.isArray(plans) &&
                plans.map((item, index) => (
                    <li key={index} className={`flex flex-col items-center justify-center w-full md:h-[70vh] h-screen gap-6 lg:w-4/12 2xl:max-w-[400px] xl:max-w-[344px] md:w-6/12 shadow rounded-[18px] p-4 ${index === 1 ? "scale-110 bg-gradient-to-b from-accent to-primary" : ""}`}>
                        <h1 class="lg:text-lg text-primary font-[memoire] text-center">{item.name}</h1>
                        <h2 className={`text-center font-[memoire] ${index === 1 ? "text-white" : "text-secondary"}`}><span>$ </span><span class="2xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl">{item.price}/ </span><span>{item.care}</span></h2>
                        <ul class="list-style-none space-y-6">
                            <li className={`tracking-wide font-[montserrat] text-center lg:text-lg ${index === 1 ? "text-white" : "text-secondary"}`}>
                                {item.service_days} Days service
                            </li>
                        {Array.isArray(item.features) &&
                        item.features.map((subitem, i) => (
                            <li key={i} className={`space-y-6 tracking-wide font-[montserrat] text-center lg:text-lg ${index === 1 ? "text-white" : "text-secondary"}`}>
                                {subitem}
                            </li>
                        ))}   
                        </ul>
                    </li>
                ))}   
                </ul>
            </div>
        </section>
    );
}

export default Plans;
