import Banner from "../../components/Banner";
import Card from "../../components/Card";
import useFetch from "../../utils/hooks/useFetch";


function Home () {
    const {datas, isLoading} = useFetch(`./logements.json`)
    const lodgingDatas = datas

    return (
        <div className="home">
            <Banner />
            {isLoading ? (
                <div className="loader"></div>
            ) : (
                <div className="home__cards">
                    {lodgingDatas.map((lodging) => (
                        <Card 
                        key={lodging.id}
                        title={lodging.title} 
                        picture={lodging.pictures[0]} 
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home