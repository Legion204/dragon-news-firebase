import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useParams } from 'react-router-dom';


const NewsDetails = () => {
    const {id} =useParams()
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-4">
                <div className=" mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block col-span-3">
                    <img role="presentation" className="object-fill w-full rounded h-96 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?5" />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                        <h4>{id}</h4>
                        <span className="text-xs dark:text-gray-600">January 25, 2021</span>
                        <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                    </div>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default NewsDetails;