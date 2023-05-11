import dayjs from 'dayjs';

export const useDayjs = (v) => {
	dayjs.locale('pt-br')
	// console.log(v)
	const dt = dayjs(v).format('DD/MM/YYYY HH:MM');
	return useState('dayjs', () => dt)
}