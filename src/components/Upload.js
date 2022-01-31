import React, {useCallback} from 'react';
import {getSignedUrlApi, uploadToS3Api} from '../utils/api';

export const Upload = ({onSetUploadImages}) => {
    const onChange = useCallback(async (e) => {
        let files = e.target.files
        const signedUrlResults = await getSignedUrlApi()
        const {url, fileName} = signedUrlResults
        await uploadToS3Api(url, files[0])
        onSetUploadImages(fileName)
    }, [onSetUploadImages])

    return (
        <div className="upload">
            <div>
                <input type='file' onChange={onChange}/>
            </div>
        </div>
    );
}
