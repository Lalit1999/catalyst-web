// // requires 'react-dropzone' and 'react-bootstrap' installation

// import { Controller } from 'react-hook-form';
// import { useState, useEffect, useCallback, useContext } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Image from 'next/image' ;
// import Button from 'react-bootstrap/Button';

// import { Close, ArrowLong } from '@icons' ;
// import { AppContext } from '@ac' ;
// import { postUpload, dataToFile, handleError } from '@utils' ;
// import AnimProgBar from '../../animprogbar/AnimProgBar.js' ;
// import styles from '../form.module.css';

// /*   PROPS NEEDED 

// name          = name of component         		= required
// label         = label text (can be comp)  		= optional
// limit         = limit no. of images (def : 20) 	= optional
// onUpload      = upload Handler (def : /upload)	= optional
// onComplete 	  = upload complete handler			= optional
// onImageDelete = image deletion handler 			= optional

// */

// const ImageInput = ({ name, label, maxLimit = 20, control, setValue, onUpload, onComplete, onImageDelete, watch, required = false, org=false, size=800 }) => {
// 	const { userToken, orgToken } = useContext(AppContext) ;
// 	const val = watch(name) ;
// 	const [files, setFiles] = useState([]);
// 	const [encodedFiles, setEncodedFiles] = useState([]) ;
// 	const [uploaded, setUploaded] = useState(val?val:[]) ;
// 	const [uploadObj, setUploadObj] = useState({ success: 0, total: 0 }) ;

// 	let capName = name.replace(/\b\w/g, ch => ch.toUpperCase())
// 	let textLabel = label?label:capName ;

// 	useEffect( () => {
// 		setValue(name, uploaded);
// 	}, [uploaded, name, setValue])

// 	useEffect(() => {
// 		const base64DataArray = files.map((fl) => fl.base64Data);
// 		setEncodedFiles(base64DataArray) ;
// 	}, [files, name, setValue]) ;
	
// 	const defaultUpload = () => {
//         setUploadObj({...uploadObj, total: uploadObj.total+encodedFiles.length}) ;
        
//         encodedFiles.forEach(async (img, i) => {
//             let image = dataToFile(img) ;
//             const fileData = new FormData() ;
//             fileData.append('file', image) ;

//             let resp = await postUpload(org?'upload-logo':'upload', fileData, org?orgToken:userToken, { size, name }, false) ;

//             if(resp?.error) 
//                 handleError(resp, resp.error) ;
//             else {
//                 if(resp?.status) {
// 					setUploaded(prevState=>[...prevState, resp.url]);
// 					setUploadObj(prevState=>({ ...prevState, success: prevState.success+1 }));
// 					if(i === encodedFiles.length-1){
// 						setFiles([]) ;
// 						if(onComplete)
// 							onComplete() ;
// 					}
//                 }
//                 else {
//                     console.error(resp) ;
//                 }
//             }
//         });
// 	}

// 	const handleDrop = useCallback((acceptedFiles) => {
// 		if (acceptedFiles && acceptedFiles.length > 0) {
// 			Promise.all(
// 				acceptedFiles.map((file) => {
// 					return new Promise((resolve, reject) => {
// 						const reader = new FileReader();
// 						reader.onload = () => {
// 							const base64Data = `data:${file.type};base64,${reader.result.split(',')[1]}`;
// 							resolve({ file, preview: reader.result, base64Data });
// 						};
// 						reader.onerror = () => reject(new Error('File read error.'));
// 						reader.readAsDataURL(file);
// 					});
// 				})
// 			)
// 			.then((updatedFiles) => {
// 				// using inital length of uploaded and not updated length
// 				setFiles((prevFiles) => [...prevFiles, ...updatedFiles].slice(0, maxLimit - uploaded.length ));
// 			})
// 			.catch((error) => {
// 				console.error('Error reading files:', error);
// 			});
// 		}
// 	}, [maxLimit, uploaded.length]);

// 	const handleRemove = (index) => {
// 		const newFiles = [...files];
// 		newFiles.splice(index, 1);
// 		setFiles(newFiles);
// 	}

// 	const { getRootProps, getInputProps } = useDropzone({
// 		onDrop: handleDrop,
// 		accept: {	
// 			'image/png': ['.png'],
// 			'image/jpg': ['.jpg', '.jpeg'],
// 			'image/webp': ['.webp'],	
// 		},
// 	});

// 	const imageDeleteCallback = (image) => {
// 		const imgs = val?.filter(i=>i!==image) ;
// 		setUploaded(imgs) ;
// 	}

// 	return (
// 		<div className={styles.inputField}>
// 			<label htmlFor={name}>{textLabel}&nbsp;{required&&<span className={styles.reqd}>*</span>}</label>
// 			<div className={`${name}Uploader`}>
// 				<Controller name={name} control={control} defaultValue={[]} render={() => (
// 					<div className={styles.defaultUploadBox}>
// 						<div {...getRootProps()} >
// 							<input {...getInputProps()} />
// 							<div className={styles.defaultLabel}>
// 								<ArrowLong />
// 								<p>Click to select image(s) or Drop image(s) here</p>
// 								{ maxLimit > 1 && <p> (Max. {maxLimit} total images)</p> }
// 							</div>
// 						</div>
// 						{files.length > 0 && (
// 							<>
// 								<div className={styles.imageList}>
// 									{files.map((fl, index) => (
// 										<div key={index} className={styles.imageItem}>
// 											{fl.file.type.startsWith('image/') && <Image src={fl.preview} fill alt={`img${index}`} />}
// 											<div className={styles.imageClose} onClick={() => handleRemove(index)}>
// 												<Close />
// 											</div>
// 										</div>
// 									))}
// 								</div>
// 								<div className={styles.uploadBtnCon}>
// 									<Button className={styles.formBtn} onClick={onUpload?onUpload:defaultUpload}>Upload</Button>
// 								</div>
// 							</>
// 						)}
// 						{	uploadObj.total > 0 && <AnimProgBar {...uploadObj} /> }
// 						{	uploaded && uploaded.length > 0 && (
// 							<div className={styles.imageSuccess}>
// 								{/* <p className={styles.imageSuccessText}> Successful Uploads </p> */}
// 								<div className={styles.imageList}>
// 									{uploaded.map((image, index) => (
// 										<div key={index} className={styles.imageItem}>
// 											<Image src={image} fill alt={`uploaded${index}`} sizes="100px" />
// 											{	onImageDelete && (
// 													<div className={styles.imageClose} onClick={()=>onImageDelete(image, imageDeleteCallback )}>
// 														<Close />
// 													</div>
// 												)
// 											}
// 										</div>
// 									))}
// 								</div>
// 							</div>
// 						)}
// 					</div>
// 				)} />
// 			</div>
// 		</div>
// 	);
// };

// export default ImageInput;
