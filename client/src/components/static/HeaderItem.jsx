import PropTypes from 'prop-types';

const HeaderItem = ({ text }) => {
    return (
        <li 
            className="
                text-base 
                text-stone-600 
                font-bold 
                cursor-pointer 
                relative 
                inline-block
                transition-all
                duration-300
                before:content-['']
                before:absolute
                before:bottom-0
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-[1.5px]
                before:opacity-0
                before:transition-all
                before:duration-300
                before:bg-stone-600
                hover:before:w-full
                hover:before:opacity-100
        ">
            {text}
        </li>
    );
};

HeaderItem.propTypes = {
    text: PropTypes.string.isRequired
};

export default HeaderItem;

// before:bg-gradient-to-r
//                 before:from-stone-600
//                 before:via-stone-400
//                 before:to-stone-200