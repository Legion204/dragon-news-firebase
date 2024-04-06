import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsCard = ({ news }) => {
    const { title, image_url, details,_id } = news;
    return (
        <div>
            <Link className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-fill w-full rounded h-44 dark:bg-gray-500" src={image_url} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-600">January 23, 2021</span>
                    {
                        details.length > 200 ? <div><p>{details.slice(0, 200)}</p><Link to={`/news/${_id}`} className="text-purple-700 underline font-bold">Read More</Link></div>
                            : <p>{details}</p>
                    }
                </div>
            </Link>
        </div>
    );
};
NewsCard.propTypes = {
    news: PropTypes.object
}
export default NewsCard;