import React, {useState, useCallback} from 'react';

const thumbs = [
    '1280x720', '1920x1080', 'crop300x300', 'crop600x400'
]

const getUrl = (t, file) => `https://d3tde91en7n7v6.cloudfront.net/${t}/${file}`


export const Images = ({file}) => {
    const [isShow, toggleShow] = useState(false)
    const onChange = useCallback(() => {
        toggleShow(!isShow)
    }, [toggleShow, isShow])

    return (
        <div className="App">
            <button type='button' onClick={onChange}>Load images</button>
            {isShow && (<div>
                    {thumbs.map((t) => (
                        <div className='container' key={t}>
                            <div className='thumb'>{t}</div>
                            <div className='thumbUrl'>{getUrl(t, file)}</div>
                            <div>
                                <img src={getUrl(t, file)} alt={t} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
