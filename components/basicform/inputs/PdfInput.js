// // requires 'react-dropzone' and 'react-bootstrap' installation

// import { Controller } from 'react-hook-form';
// import { useState, useEffect, useCallback, useContext } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Button from 'react-bootstrap/Button';

// import { Close, ArrowLong } from '@icons';
// import { AppContext } from '@ac';
// import { postUpload, handleError } from '@utils';
// import AnimProgBar from '../../animprogbar/AnimProgBar.js';
// import styles from '../form.module.css';

// /*   PROPS NEEDED 

// name          = name of component               = required
// label         = label text (can be comp)        = optional
// limit         = max number of files (def: 10)   = optional
// onUpload      = upload Handler                  = optional
// onComplete    = upload complete handler         = optional
// onFileDelete  = file deletion handler           = optional

// */

// const FileInput = ({ name, label, maxLimit = 10, control, setValue, onUpload, onComplete, onFileDelete, watch, required = false }) => {
//     const { userToken } = useContext(AppContext);
//     const val = watch(name);
//     const [files, setFiles] = useState([]);
//     const [uploaded, setUploaded] = useState(val ? val : []);
//     const [uploadObj, setUploadObj] = useState({ success: 0, total: 0 });

//     let capName = name.replace(/\b\w/g, ch => ch.toUpperCase());
//     let textLabel = label ? label : capName;

//     useEffect(() => {
//         setValue(name, uploaded);
//     }, [uploaded, name, setValue]);

//     const defaultUpload = () => {
//         setUploadObj({ ...uploadObj, total: uploadObj.total + files.length });

//         files.forEach(async (fl, i) => {
//             const fileData = new FormData();
//             fileData.append('file', fl.file);

//             let resp = await postUpload('upload-pdf', fileData, userToken, { name }, false);

//             if (resp?.error) 
//                 handleError(resp, resp.error);
//             else {
//                 if (resp?.status) {
//                     setUploaded(prevState => [...prevState, resp.url]);
//                     setUploadObj(prevState => ({ ...prevState, success: prevState.success + 1 }));
//                     if (i === files.length - 1) {
//                         setFiles([]);
//                         if (onComplete) 
// 							onComplete();
//                     }
//                 } else {
//                     console.error(resp);
//                 }
//             }
//         });
//     };

//     const handleDrop = useCallback((fileArr) => {
//         if (fileArr.length > 0) {
//             const newFiles = fileArr.map((file) => ({ file, name: file.name, size: file.size }));

//             setFiles((prevFiles) => [...prevFiles, ...newFiles].slice(0, maxLimit - uploaded.length));
//         }
//     }, [maxLimit, uploaded.length]);

//     const handleRemove = (index) => {
//         const newFiles = [...files];
//         newFiles.splice(index, 1);
//         setFiles(newFiles);
//     };

//     const { getRootProps, getInputProps } = useDropzone({
//         onDrop: handleDrop, 
//         accept: { 'application/pdf': ['.pdf']	},
//         // accept: { 'application/pdf': ['.pdf'], 'application/msword': ['.doc', '.docx']	},
//     });

//     const fileDeleteCallback = file => {
//         const updatedFiles = val?.filter(i => i !== file);
//         setUploaded(updatedFiles);
//     };

//     return (
//         <div className={styles.inputField}>
//             <label htmlFor={name}>{textLabel}&nbsp;{required&&<span className={styles.reqd}>*</span>}</label>
//             <div className={`${name}Uploader`}>
//                 <Controller name={name} control={control} defaultValue={[]} render={() => (
//                     <div className={styles.defaultUploadBox}>
//                         <div {...getRootProps()}>
//                             <input {...getInputProps()} />
//                             <div className={styles.defaultLabel}>
//                                 <ArrowLong />
//                                 <p>Click to select file(s) or Drop file(s) here</p>
//                                 {maxLimit > 1 && <p> (Max. {maxLimit} total files)</p>}
//                             </div>
//                         </div>
//                         {files.length > 0 && (
//                             <>
//                                 <div className={styles.fileList}>
//                                     {files.map((fl, index) => (
//                                         <div key={index} className={styles.fileItem}>
//                                             <p className={styles.fileName}>{fl.name} ({(fl.size / (1024*1024)).toFixed(2)} MB)</p>
//                                             <div className={styles.fileClose} onClick={() => handleRemove(index)}>
//                                                 <Close />
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className={styles.uploadBtnCon}>
//                                     <Button className={styles.formBtn} onClick={onUpload ? onUpload : defaultUpload}>
//                                         Upload
//                                     </Button>
//                                 </div>
//                             </>
//                         )}
//                         {uploadObj.total > 0 && <AnimProgBar {...uploadObj} />}
//                         {uploaded && uploaded.length > 0 && (
//                             <div className={styles.fileSuccess}>
//                                 <div className={styles.fileList}>
//                                     {uploaded.map((file, index) => (
//                                         <div key={index} className={styles.fileItem}>
//                                             <p>{file.split('/').pop()}</p>
//                                             {onFileDelete && (
//                                                 <div className={styles.fileClose} onClick={() => onFileDelete(file, fileDeleteCallback)}>
//                                                     <Close />
//                                                 </div>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 )} />
//             </div>
//         </div>
//     );
// };

// export default FileInput;
