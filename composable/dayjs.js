import dayjs from 'dayjs';

export const useDayjs = (v) => {
	const dt = dayjs(v).format('DD/MM/YYYY HH:mm');
	return useState('dayjs', () => dt)
}