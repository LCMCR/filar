import PropTypes from 'prop-types';

function AnnouncementBar({ title }) {
    return (
        <div className="bg-stone-600 h-6 z-20 flex place-items-center text-center font-titleFont font-bold sticky top-0">
            <span className="announcement-bar grow text-white text-sm tracking-wide animate-pulse">
                {title}
            </span>
        </div>
    );
}

AnnouncementBar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default AnnouncementBar;
