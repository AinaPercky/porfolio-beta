import dataLogin from "./dataLogin";

const handleLogin = (e) => {
    e.preventDefault();
    console.log(user);
    const userFound = dataLogin.find(
        (item) => item.userName == user.username && item.password == user.password
    );
    if (!userFound) {
        alert('mot de passe incorrect');
        setUser({ username: '', password: '' });
    } else {
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
    }
};
export default handleLogin;