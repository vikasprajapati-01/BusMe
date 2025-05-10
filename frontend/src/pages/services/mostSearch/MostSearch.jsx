
import RootLayout from "../../../layout/RootLayout";

import MostSearchCont from "./MostSearchCont";

function MostSearch() {
    return(
        <RootLayout className="space-y-12">
            <div className="w-full flex items-center justify-center text-center mt-20 mb-8">
                <h1 className="text-3xl text-neutral-800 font-bold">
                    Top <span className="text-primary">Searches</span>
                </h1>
            </div>

            {/* Top seaches container */}

            <div className="w-full grid grid-cols-3 gap-4">
                <MostSearchCont from={"Bangalore"} to={"Chennai"} price={"700"} travelTime={"8 hr"} />
                <MostSearchCont from={"Mumbai"} to={"Kolkata"} price={"1200"} travelTime={"10 hr"} />
                <MostSearchCont from={"Lucknow"} to={"Mysuru"} price={"2400"} travelTime={"18 hr"} />
                <MostSearchCont from={"Indore"} to={"Pune"} price={"600"} travelTime={"3 hr"} />
                <MostSearchCont from={"Delhi"} to={"Agra"} price={"300"} travelTime={"2.5 hr"} />
                <MostSearchCont from={"Hydrabad"} to={"Jaipur"} price={"1700"} travelTime={"11 hr"} />
                <MostSearchCont from={"Pune"} to={"Ayodhya"} price={"500"} travelTime={"4 hr"} />
            </div>
        </RootLayout>
    );
}

export default MostSearch