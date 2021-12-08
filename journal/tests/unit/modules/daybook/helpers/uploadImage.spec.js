import cloudinary from 'cloudinary';
import axios from 'axios';
import uploadImage from '@/modules/daybook/helpers/uploadImage';

cloudinary.config({
    cloud_name: 'dy9jvdigt',
    api_key: '878856217435663',
    api_secret: 'iAsRVnP8a4sfRsggOFbS8Ma2xSs',
});

describe('Tests of uploadImage', () => {
    test('Must load a file and return the url', async(done) => {
        const { data } = await axios.get('https://res.cloudinary.com/dy9jvdigt/image/upload/v1638883309/lyseoadxc6az9cq3t5ms.jpg', {
            responseType: 'arraybuffer'
        });

        const file = new File([data], 'foto.jpg');

        const url = await uploadImage(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length -1].replace('.jpg', '');

        cloudinary.v2.api.delete_resources(imageId, () => {
            done();
        });
    });
});
