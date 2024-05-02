
const getResult = (a, b) => {
    return a+b;
}


export const FirstApp = () => {
    return (
        <>
            <h1>{getResult(1,2)}</h1>
            <h2>Soy un ejercicio!</h2>
            <p>esto es para ver el uso de Fragment</p>
        </>
);
}