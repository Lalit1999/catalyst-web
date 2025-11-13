// // This module requires 'react-dropzone' and 'react-avatar-editor' to work

// import { Controller } from 'react-hook-form';
// import { useState, useCallback } from 'react';
// import AvatarEditor from 'react-avatar-editor';
// import { useDropzone } from 'react-dropzone';

// import { Plus, Minus, Close } from '@icons' ;
// import styles from '../form.module.css';

// // requires 'react-avatar-editor' & 'react-dropzone' installation

// /*   PROPS NEEDED 

// name    = name of component         = required
// label   = label text (can be comp)  = optional
// size    = size of image (def : 250) = optional

// */

// const DPInput = ({ name, label, size=250, control, setValue, def }) => {
//     const [image, setImage] = useState(null);
//     const [editor, setEditor] = useState(null);
//     const [zoom, setZoom] = useState(1);

//     const handleDrop = useCallback((acceptedFiles) => {
//         if (acceptedFiles && acceptedFiles.length > 0) {
//             const file = acceptedFiles[0];
//             const reader = new FileReader();
//             reader.onload = () => setImage(reader.result);
//             reader.readAsDataURL(file);
//         }
//     }, []);

//     const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop, accept: { 'image/jpg': ['.jpg', '.jpeg'], 'image/png': ['.png'], 'image/webp': ['.webp'] } }) ;

//     const setImageValue = () => {
//         if (editor) {
//             const canvas = editor.getImageScaledToCanvas().toDataURL();
//             setValue(name, canvas);
//         }
//     }

//     const handleZoom = (event) => setZoom(parseFloat(event.target.value));

//     const returnUploader = () => {
//         if(image)
//             return (
//                 <>
//                     <AvatarEditor key={name} ref={(ref) => setEditor(ref)} image={image} width={size} height={size} border={5} borderRadius={size/2} color={[255, 255, 255]} scale={zoom} rotate={0} onImageChange={setImageValue} onImageReady={setImageValue} />
//                         <div className={styles.zoomCon}>
//                             <div onClick={() => zoom > 1 ? setZoom(zoom - 1) : null}>{Minus?<Minus/>:'-'}</div>
//                             <input type="range" min="1" max="10" step="0.1" value={zoom} onChange={handleZoom} />
//                             <div onClick={() => zoom < 10 ? setZoom(zoom + 1) : null}>{Plus?<Plus/>:'+'}</div>
//                         </div>
//                     <div className={styles.saveBtn} onClick={()=>setImage(null)}> {Close?<Close/>:'-'}&nbsp;Cancel</div>
//                 </>
//             ) ;
//         else
//             return (
//                 <div className={styles.labelCon} {...getRootProps()}>
//                     <input {...getInputProps()} />
//                     {label ? label() : <p>Drag and drop an image here, or click to select file</p>}
//                 </div>
//             ) ;
//     }

//     return (
//         <div className={styles.imageUploader}>
//             <Controller name={name} control={control} defaultValue={def?def:''} render={returnUploader} />
//         </div>
//     );
// };

// export default DPInput;