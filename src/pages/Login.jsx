import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataLogin from '../utils/dataLogin';

export default function Login() {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		username: '',
		password: '',
	});
	const handleLogin = (e) => {
		e.preventDefault();
		console.log(user);
		// const loggedUser={};
		// loggedUser.name=name;
		// loggedUser.password=password;
		// setUser(loggedUser);
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
	}; // localStorage.setItem('user',User);
	return (
		<div className='bg-gray-50 font-[sans-serif]'>
			<div className="min-h-screen flex             // localStorage.setItem('user',User);flex-col items-center justify-center py-6 px-4">
				<div className='max-w-md w-full'>
					<div className='p-8 rounded-2xl bg-white shadow'>
						<h2 className='text-gray-800 text-center text-2xl font-bold'>
							Login
						</h2>
						<form className='mt-8 space-y-4'>
							<div>
								<label className='text-gray-800 text-sm mb-2 block'>
									User name
								</label>
								<div className='relative flex items-center'>
									<input
										name='username'
										type='text'
										value={user.username}
										onChange={(e) =>
											setUser({ ...user, username: e.target.value })
										}
										required
										className='w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600'
										placeholder='Enter user name'
									/>
								</div>
							</div>
							<div>
								<label className='text-gray-800 text-sm mb-2 block'>
									Password
								</label>
								<div className='relative flex items-center'>
									<input
										name='password'
										type='password'
										value={user.password}
										onChange={(e) =>
											setUser({ ...user, password: e.target.value })
										}
										required
										className='w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600'
										placeholder='Enter password'
									/>
								</div>
							</div>

							<div className='!mt-8'>
								<button
									type='submit'
									onClick={(e) => handleLogin(e)}
									className='w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'
								>
									Connect
								</button>
							</div>
							{/* <p className="text-gray-800 text-sm !mt-8 text-center">
                        Don't have an account?{" "}
                        <a
                        href="javascript:void(0);"
                        className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                        >
                        Register here
                        </a>
                    </p> */}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
