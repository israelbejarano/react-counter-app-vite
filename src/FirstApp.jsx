import PropTypes from 'prop-types';
const getResult = (a, b) => {
    return a+b;
}


export const FirstApp = ({title, subTitle, name}) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <h1>{getResult(1,2)}</h1>
            <h2>Soy un ejercicio!</h2>
            <p>esto es para ver el uso de Fragment</p>
            <p>{name}</p>
        </>
);
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'título por defecto',
    subTitle: 0,
    name: 'Israel Bejarano Álvrez'
}