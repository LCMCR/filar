import PropTypes from 'prop-types';


const SocialLink = ({ icon, label, link }) => (
        <a href={link} className="flex items-center gap-3 hover:underline duration-300 cursor-pointer">
            <span>{icon}</span>
            {label}
        </a>
    );

SocialLink.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default SocialLink;
