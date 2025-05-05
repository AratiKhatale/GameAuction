// import { Paper } from '@mui/material';
// import Autocomplete from '@mui/material/Autocomplete';
// import { useTheme } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// import { Box } from '@mui/system';
// import React, { useEffect, useMemo, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
// import axios from '../../../../api';
// import { projectSet, userRoleSet, projectNameSet, regionSet, regionNameSet, podSet, podNameSet } from 'store/reducers/customizationReducer';
// // import { openLoader } from 'store/reducers/loader';
// // import { openLoader } from 'store/reducers/loaderNoBack';
// // import { protocol } from 'config';
// // import { host } from 'config';
// // import CustomLoader from 'components/@extended/CustomLoader';
// // import CustomLoaderNoBack from 'components/@extended/CustomLoaderNoBack';
// import { useLocation } from 'react-router-dom';
// import { MessageFormat } from 'components/component/MessageFormat';
// import { openAlert } from 'store/reducers/alert';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { openLoader } from 'store/reducers/loader';
// import Cookies from 'universal-cookie';

// import { useTranslation } from "react-i18next";
// var CryptoJS = require('crypto-js');
// const host = window.location.hostname;
// const protocol = window.location.protocol;

// function DropdownSection({ propUser, regionLock, showOnlyProject, activeStep, hideDropdowns }) {
//     const theme = useTheme();
//     const [selectedName, setSelectedName] = useState(null);
//     const dispatch = useDispatch();
//     const { t, i18n } = useTranslation();
//     const customization = useSelector((state) => state.customizationReducer);
//     const { region, pod } = customization;
//     const [selected, setSelected] = useState(null);
//     const [userRole, setUserRole] = useState('TEMP');
//     const [projectData, setProjectData] = useState([]);
//     const [projectDataCopy, setProjectDataCopy] = useState([]);
//     const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
//     const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
//     const [PODDropdownOpen, setPODDropdownOpen] = useState(false);
//     const [selectedProjectData, setSelectedProjectData] = useState([]);
//     const [value, setValue] = React.useState();
//     const [inputValue, setInputValue] = React.useState('');
//     const [options, setOptions] = React.useState([]);
//     const navigate = useNavigate();
//     const [regionData, setRegionData] = useState([]);
//     const [selectedRegion, setSelectedRegion] = useState('');
//     const [selectedRegionName, setSelectedRegionName] = useState('');

//     const [podData, setPodData] = useState([]);
//     const [podValue, setPodValue] = useState('');
//     const [selectedPod, setSelectedPod] = useState('');
//     const [selectedPodName, setSelectedPodName] = useState('');
//     const [podOptions, setPodOptions] = useState([]);
//     let podFlag = true;
//     const [projectOptions, setProjectOptions] = React.useState([]);

//     const [projectInputValue, setProjectInputValue] = React.useState('');
//     const [projectValue, setProjectValue] = React.useState('');

//     const [regionInputValue, setRegionInputValue] = React.useState('');
//     const [regionValue, setRegionValue] = React.useState('');
//     const [regionOptions, setRegionOptions] = React.useState([]);
//     const projectReducer = useSelector((state) => state.customizationReducer);
//     const { project } = projectReducer;
//     const user = useSelector((state) => state.customizationReducer);
//     const { userDetails } = user;
//     const { pathname } = useLocation();
//     const cookies = new Cookies();

//     const [isProjectDisable, setIsProjectDisable] = useState(false);

//     useEffect(() => {
//         const getProject = async () => {
//             let cookieValue = '';

//             dispatch(openLoader({ open: true }));
//             try {

//                 cookieValue = cookies.get('xrf-iam-cross-tenant');
//                 const projectResponse = await axios.get(`${protocol}//${host}/iam-service/get_user_projects_redis?module_key=EN360`);
//                 if (projectResponse.data.status == "success") {
//                     let tempProjectOptions = [];
//                     projectResponse?.data?.data?.map((index) => {
//                         tempProjectOptions.push({ label: `${index.project_name}`, value: `${index.project_id}` })

//                     })
//                     setProjectOptions(tempProjectOptions)

//                     if (cookieValue) {
//                         let selectedProjectFromCookie = JSON.parse(atob(cookieValue));
//                         if (selectedProjectFromCookie.selected_project.project_id) {
//                             let flag = false
//                             projectResponse?.data?.data?.map((index) => {
//                                 if (index.project_id == selectedProjectFromCookie.selected_project.project_id) {
//                                     flag = true
//                                 }
//                             })
//                             if (flag) {
//                                 setSelectedProjectData(selectedProjectFromCookie.selected_project);
//                                 setSelected(selectedProjectFromCookie.selected_project.project_id);
//                                 setSelectedName(selectedProjectFromCookie.selected_project.project_name);
//                                 setProjectValue({ label: selectedProjectFromCookie.selected_project.project_name, value: selectedProjectFromCookie.selected_project.project_id })
//                             } else {
//                                 setSelectedProjectData(projectResponse?.data?.data[0]);
//                                 setSelected(projectResponse?.data?.data[0].project_id);
//                                 setSelectedName(projectResponse?.data?.data[0].project_name ? projectResponse?.data?.data[0].project_name : projectResponse?.data?.data[0].name);
//                                 setProjectValue({ label: projectResponse?.data?.data[0].project_name ? projectResponse?.data?.data[0].project_name : projectResponse?.data?.data[0].name, value: projectResponse?.data?.data[0].project_id })
//                             }
//                         }
//                     }
//                     else {
//                         setSelectedProjectData(projectResponse?.data?.data[0]);
//                         setSelected(projectResponse?.data?.data[0].project_id);
//                         setSelectedName(projectResponse?.data?.data[0].project_name);
//                         setProjectValue({ label: projectResponse?.data?.data[0].project_name, value: projectResponse?.data?.data[0].project_id })

//                     }
//                     dispatch(openLoader({ open: false }));
//                 }
//                 else {
//                     if (projectResponse.data.status == "error") {
//                         if (projectResponse.data.message.error) {
//                             dispatch(openAlert({
//                                 open: true,
//                                 severity: 'error',
//                                 message: MessageFormat(projectResponse.data.message.error)
//                             }))
//                         }
//                         dispatch(openLoader({ open: false }));
//                     } else {
//                         dispatch(openAlert({
//                             open: true,
//                             severity: 'error',
//                             message: "Service Unavailable"
//                         }))
//                         dispatch(openLoader({ open: false }));
//                     }
//                 }
//             }
//             catch (e) {
//                 console.log("Error", e);
//             }
//         }
//         if (customization.userDetails && showOnlyProject) {
//             getProject();
//         }

//     }, [userDetails, pathname])

//     // useEffect(() => {
//     //     // const value = window.localStorage.getItem('userInfo');
//     //     const value = window.sessionStorage.getItem('userInfo');
//     //     if (value && showOnlyProject && userDetails) {
//     //         let bytes = CryptoJS.AES.decrypt(value, 'enlight@360$reactApp');
//     //         let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//     //         setProjectData(decryptedData.project_data.data);
//     //         setProjectDataCopy(decryptedData.project_data.data);

//     //         if (decryptedData) {
//     //             let tempProjectOptions = [];

//     //             decryptedData.project_data.data?.map((index) => {
//     //                 tempProjectOptions.push({ label: `${index.project_name}`, value: `${index.project_id}` });
//     //             });
//     //             setProjectOptions(tempProjectOptions);
//     //         } else {
//     //             setProjectOptions([]);
//     //         }
//     //         for (var key in cookies) {
//     //             if (key === 'xrf-iam-cross-tenant') {
//     //                 cookieValue = cookies[key];
//     //             }
//     //         }
//     //         if (cookieValue) {
//     //             let selected64 = atob(cookieValue);
//     //             selected64 = JSON.parse(selected64);
//     //             console.log("cookieValue",selected64.selected_project.project_name);

//     //             if (selected64.selected_project.project_id) {
//     //                 let flag = false
//     //                 decryptedData.project_data.data?.map((index) => {
//     //                     if (index.project_id == selected64.selected_project.project_id) {
//     //                         flag = true
//     //                     }
//     //                 })
//     //                 if (flag) {
//     //                     setSelectedProjectData(selected64.selected_project);
//     //                     setSelected(selected64.selected_project.project_id);
//     //                     setSelectedName(selected64.selected_project.project_name);
//     //                     setProjectValue({ label: selected64.selected_project.project_name, value: selected64.selected_project.project_id })
//     //                 } else {
//     //                     setSelectedProjectData(decryptedData.project_data.data[0]);
//     //                     setSelected(decryptedData.project_data.data[0].project_id);
//     //                     setSelectedName(decryptedData.project_data.data[0].project_name ? decryptedData.project_data.data[0].project_name : decryptedData.project_data.data[0].name);
//     //                     setProjectValue({ label: decryptedData.project_data.data[0].project_name ? decryptedData.project_data.data[0].project_name : decryptedData.project_data.data[0].name, value: decryptedData.project_data.data[0].project_id })
//     //                 }
//     //             } else {
//     //                 setSelectedProjectData(decryptedData.project_data.data[0]);
//     //                 setSelected(decryptedData.project_data.data[0].project_id);
//     //                 setSelectedName(decryptedData.project_data.data[0].project_name);
//     //                 setProjectValue({
//     //                     label: decryptedData.project_data.data[0].project_name,
//     //                     value: decryptedData.project_data.data[0].project_id
//     //                 });
//     //             }
//     //         } else {
//     //             setSelectedProjectData(decryptedData.project_data.data[0]);
//     //             setSelected(decryptedData.project_data.data[0].project_id);
//     //             setSelectedName(decryptedData.project_data.data[0].project_name);
//     //             setProjectValue({
//     //                 label: decryptedData.project_data.data[0].project_name,
//     //                 value: decryptedData.project_data.data[0].project_id
//     //             });
//     //         }
//     //     }
//     // }, [userDetails,pathname]);

//     useEffect(() => {
//         // const value = window.localStorage.getItem('userInfo');
//         const value = window.sessionStorage.getItem('userInfo');
//         if (value) {
//             let bytes = CryptoJS.AES.decrypt(value, 'enlight@360$reactApp');
//             let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//             // console.log(decryptedData);
//             // console.log(decryptedData.projects[0].project_users[0].user_modules[0].role_details.role_key)
//             if (decryptedData.user_data.issuperadmin == false || decryptedData.user_data.issuperadmin == null) {
//                 decryptedData.project_data.data?.map((index) => {
//                     // console.log(index.project_id, selected, index.project_id == selected)
//                     if (index.project_id === selected) {
//                         // let userModules = index;
//                         // console.log(userModules);
//                         // userModules?.map((moduleIndex) => {
//                         if (index.module_key == 'EN360') {
//                             // console.log('moduleIndex',moduleIndex)
//                             if (index.role_key) {
//                                 if (index.role_key == 'SUPER') {
//                                     let encodedString = CryptoJS.AES.encrypt(
//                                         JSON.stringify('PROJECTWISE_SUPER'),
//                                         'enlight@360$reactApp'
//                                     ).toString();
//                                     // localStorage.setItem('localQuota', encodedString);
//                                     sessionStorage.setItem('localQuota', encodedString);
//                                     setUserRole('PROJECTWISE_SUPER');
//                                     // console.log(encodedString)
//                                 } else {
//                                     let encodedString = CryptoJS.AES.encrypt(
//                                         JSON.stringify(index.role_key),
//                                         'enlight@360$reactApp'
//                                     ).toString();
//                                     sessionStorage.setItem('localQuota', encodedString);
//                                     // console.log("IN Session:"+moduleIndex.role_details.role_key)
//                                     // console.log(index.role_key);
//                                     setUserRole(index.role_key);
//                                 }
//                             }
//                         }
//                         // });
//                     }
//                 });
//             }
//             if (decryptedData.user_data.issuperadmin == true) {
//                 let encodedString = CryptoJS.AES.encrypt(JSON.stringify('SUPER'), 'enlight@360$reactApp').toString();
//                 sessionStorage.setItem('localQuota', encodedString);
//                 // localStorage.setItem('userRole', "SUPERADMIN");
//                 setUserRole('SUPER');
//             }
//         }
//     }, [selected]);

//     useEffect(() => {
//         dispatch(userRoleSet({ userRole: userRole }));
//     }, [dispatch, userRole]);

//     useEffect(() => {
//         let cookieUpdate = { projects: projectData, selected_project: selectedProjectData };
//         cookieUpdate = JSON.stringify(cookieUpdate);
//         // cookieUpdate = Buffer.from(cookieUpdate).toString('base64');
//     }, [projectData, selectedProjectData]);

//     useEffect(() => {
//         dispatch(openLoader({ open: true }));
//         if (showOnlyProject) {

//             const value = window.sessionStorage.getItem('userInfo');
//             if (value && selected) {
//                 let bytes = CryptoJS.AES.decrypt(value, 'enlight@360$reactApp');
//                 let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//                 axios
//                     .post(
//                         `${protocol}//${host}/iam-service/set_active_project`,
//                         { project_id: selected, module_key: 'EN360' },
//                         { headers: { Authorization: decryptedData.token_data.access_token } }
//                     )
//                     .then((response) => {
//                         if (response?.data?.status == 'success') {
//                             let cookieUpdate = '';
//                             cookieUpdate = {
//                                 selected_project: { project_id: response.data.data.project_id, project_name: response.data.data.project_name }
//                             };
//                             dispatch(projectSet({ project: cookieUpdate }));
//                             cookieUpdate = JSON.stringify(cookieUpdate);
//                             cookieUpdate = btoa(cookieUpdate);
//                             localStorage.setItem('project', cookieUpdate);
//                             window.dispatchEvent(new CustomEvent('projectChange', { detail: cookieUpdate }));
//                             // cookieUpdate = Buffer.from(cookieUpdate).toString('base64');
//                             cookies.set('xrf-iam-cross-tenant', cookieUpdate, { path: '/' });
//                             dispatch(openLoader({ open: false }));
//                         } else {
//                             dispatch(openLoader({ open: false }));
//                             console.log("error", response?.data?.message)
//                             if (response.data.message) {

//                                 dispatch(openAlert({
//                                     open: true,
//                                     severity: 'error',
//                                     message: MessageFormat(response.data.message)
//                                 }))
//                             } else {
//                                 dispatch(openAlert({
//                                     open: true,
//                                     severity: 'error',
//                                     message: 'error'
//                                 }))
//                             }
//                         }

//                     }).catch(e => console.log("error", e))
//             }
//         }
//     }, [selected]);
//     useEffect(() => {
//         dispatch(projectNameSet({ projectName: selectedName }));
//     }, [dispatch, selectedName]);


//     useEffect(() => {
//         if (!window.sessionStorage.getItem('regDetails') && !showOnlyProject) {
//             axios.post(`${protocol}//${host}/iam-service/regions`)
//                 .then(response => {
//                     if (response.data.status == "success") {
//                         var encodedString = CryptoJS.AES.encrypt(JSON.stringify(response.data.data.records), 'enlight@360$reactApp').toString();
//                         window.sessionStorage.setItem("regDetails", encodedString);
//                         // window.sessionStorage.setItem("regDetails", encodedString);
//                         if (response?.data?.data?.records) {
//                             setRegionData(response.data.data.records)
//                             let tempRegionOptions = [{ id: '', value: '', label: 'All Regions' }]
//                             response.data.data.records?.map((index) => {
//                                 tempRegionOptions.push({ id: index.region_id, label: `${index.region_name}`, value: `${index.region_id}` })

//                             })
//                             setSelectedRegion(tempRegionOptions[0].id)
//                             setSelectedRegionName(tempRegionOptions[0].value)
//                             setRegionValue(tempRegionOptions[0])
//                             setRegionOptions(tempRegionOptions)
//                         } else {
//                             setRegionData([])
//                             setRegionOptions([])
//                         }
//                     }
//                 })
//                 .catch((err) => { console.log(err) });
//         } else {
//             const value = window.sessionStorage.getItem("regDetails");
//             if (value) {

//                 let bytes = CryptoJS.AES.decrypt(value, 'enlight@360$reactApp');
//                 let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//                 const regionVal = JSON.parse(sessionStorage.getItem('regionItem'));
//                 if (decryptedData) {
//                     setRegionData(decryptedData)
//                     //   dispatch(regionSet({region:decryptedData[0].region_id }));
//                     //   dispatch(regionNameSet({regionName:decryptedData[0].region_name }));

//                     let tempRegionOptions = [{ id: '', value: '', label: 'All Regions' }]
//                     decryptedData?.map((index) => {
//                         tempRegionOptions.push({ id: index.region_id, label: `${index.region_name}`, value: `${index.region_id}` })

//                     })
//                     if (regionVal) {
//                         setSelectedRegion(regionVal.id)
//                         setSelectedRegionName(regionVal.value)
//                         setRegionValue(regionVal);
//                     } else {
//                         setSelectedRegion(tempRegionOptions[0].id)
//                         setSelectedRegionName(tempRegionOptions[0].value)
//                         setRegionValue(tempRegionOptions[0]);
//                     }
//                     setRegionOptions(tempRegionOptions)
//                 } else {
//                     setRegionData([])
//                     setRegionOptions([])

//                 }
//             }
//         }

//     }, [])
//     useEffect(() => {
//         dispatch(regionSet({ region: selectedRegion }));
//         dispatch(regionNameSet({ regionName: selectedRegionName }));
//     }, [dispatch, selectedRegion]);

//     useEffect(() => {
//         if (region?.length > 0 && podFlag && !showOnlyProject) {
//             let params = {};
//             if (region) {
//                 params['region_id'] = region;
//             }
//             dispatch(openLoader({ open: true }));
//             podFlag = false;
//             axios.get(`${protocol}//${host}/cloud-service/vmm`, { params })
//                 .then(response => {
//                     if (response.data.status == "success") {
//                         var encodedString = CryptoJS.AES.encrypt(JSON.stringify(response.data.data.records), 'enlight@360$reactApp').toString();
//                         // window.sessionStorage.setItem("regDetails", encodedString);
//                         if (response?.data?.data) {
//                             // response.data.data.map((index) => {
//                             //     index['is_sdn_enabled'] = 'yes'
//                             // })
//                             // console.log("response",JSON.stringify(response.data.data))
//                             setPodData(response.data.data)

//                             let tempPodOptions = [];
//                             response.data.data.map((index) => {
//                                 tempPodOptions.push({ ...index, label: `${index.name}`, value: `${index.name}` })
//                             })
//                             if (pod) {
//                                 setPodOptions(tempPodOptions)
//                                 setSelectedPod(pod)
//                                 setSelectedPodName(pod.value)
//                                 setPodValue({ ...pod, label: `${pod.name}`, value: `${pod.name}` })
//                             } else {
//                                 setPodOptions(tempPodOptions)
//                                 setSelectedPod(response.data.data[0])
//                                 setSelectedPodName(tempPodOptions[0].value)
//                                 setPodValue(tempPodOptions[0])
//                             }

//                         } else {
//                             setPodData([])
//                         }
//                         dispatch(openLoader({ open: false }));
//                     }
//                     else {
//                         if (response.data.status === 'error') {
//                             if (response.data.message) {
//                                 dispatch(openAlert({
//                                     open: true,
//                                     severity: 'error',
//                                     message: MessageFormat(response.data.message)
//                                 }));
//                             }
//                             else {
//                                 dispatch(openAlert({
//                                     open: true,
//                                     severity: 'error',
//                                     message: 'Service Unavailable'
//                                 }));
//                             }
//                         }
//                         dispatch(openLoader({ open: false }));
//                     }

//                 })
//                 .catch((err) => {
//                     console.log(err)
//                     dispatch(openLoader({ open: false }));
//                 });
//         }

//     }, [region])

//     React.useEffect(() => {
//         dispatch(podSet({ pod: selectedPod }));
//         dispatch(podNameSet({ podName: selectedPodName }));
//     }, [dispatch, selectedPod])



//     React.useEffect(() => {
//         if (regionValue && regionValue?.value !== '') {
//             window.sessionStorage.setItem('regionItem', JSON.stringify(regionValue))
//         }
//     }, [regionValue])


//     React.useEffect(() => {
//         if (Object.entries(podValue).length > 0) {
//             window.sessionStorage.setItem('PODItem', JSON.stringify(podValue))
//         }
//     }, [podValue])

//     React.useEffect(() => {
//         let data = JSON.parse(window.sessionStorage.getItem('PODItem'))
//         if (data) {
//             setPodValue(data)
//             setSelectedPod(data);
//             setSelectedPodName(data.label);
//         }
//     }, [])

//     useEffect(() => {
//         const disableProject = (event) => {

//             // setDisable(event.detail)
//             console.log("disableProject", event);
//             setIsProjectDisable(event.detail)
//         }
//         window.addEventListener('disableProject', disableProject);

//         return () => {
//             window.removeEventListener('disableProject', disableProject);
//         };
//     }, []);

//     useEffect(() => {
//         const enableProject = (event) => {

//             // setDisable(event.detail)
//             console.log("enableProject", event);
//             setIsProjectDisable(event.detail)
//         }
//         window.addEventListener('enableProject', enableProject);

//         return () => {
//             window.removeEventListener('enableProject', enableProject);
//         };
//     }, []);


//     return (
//         <>
//             <Box sx={{ display: 'flex', mr: 1 }} style={{ gap: '8px' }}>
//                 {showOnlyProject && <Autocomplete
//                     // disabled={activeStep > 1}
//                     //   disabled={pathname.includes('url-details') ? true : false}
//                     open={projectDropdownOpen}
//                     onOpen={() => setProjectDropdownOpen(true)}
//                     onClose={() => setProjectDropdownOpen(false)}
//                     sx={{ minWidth: 140, padding: 0, '& .MuiAutocomplete-endAdornment': { padding: '2px 8px' } }}
//                     ListboxProps={{ style: { maxHeight: 200, overflow: 'auto', marginTop: '9px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }, className: 'scrollBarDesign' }}
//                     disablePortal
//                     blurOnSelect
//                     disabled={isProjectDisable}
//                     isOptionEqualToValue={(option, value) => option.value === value.value}
//                     id="projectDropdown"
//                     options={projectOptions}
//                     value={projectValue || ''}
//                     disableClearable
//                     popupIcon={<ExpandMoreIcon />}
//                     onChange={(event, newValue) => {
//                         setProjectValue(newValue);
//                         if (newValue) {
//                             setSelected(newValue.value);
//                             setSelectedName(newValue.label);
//                         }
//                     }}
//                     PaperComponent={({ children }) => (
//                         <Paper elevation={8} content="false" shadow={theme.shadows[8]}>
//                             {children}
//                         </Paper>
//                     )}
//                     inputValue={projectInputValue}
//                     onInputChange={(event, newInputValue) => {
//                         setProjectInputValue(newInputValue);
//                     }}
//                     renderInput={(params) =>
//                         <TextField
//                             sx={{
//                                 padding: 0, fontSize: '13px', background: 'transparent', '& input': {
//                                     color: '#FFFFFF !important',
//                                     marginRight: '15px'
//                                 },
//                                 '& .MuiAutocomplete-inputRoot': {
//                                     paddingRight: '8px !important'
//                                 }
//                                 ,
//                                 '& svg': {
//                                     '& path': {
//                                         fill: projectDropdownOpen ? '#007ae2' : '#FFFFFF'
//                                     }
//                                 }
//                             }}
//                             {...params}
//                             variant="standard"
//                             InputProps={{
//                                 ...params.InputProps,
//                                 disableUnderline: true,
//                                 classes: {
//                                     input: 'textField',
//                                     notchedOutline: 'outlinedTextfield',
//                                 },
//                             }}
//                             //   required 
//                             //   label="Project"
//                             placeholder={t("Project")}
//                         />}
//                 />}
//                 {!showOnlyProject && <Autocomplete
//                     sx=
//                     {{
//                         width: 140,
//                         padding: 0,
//                         display: hideDropdowns ? "none" : ''
//                     }}
//                     open={regionDropdownOpen}
//                     onOpen={() => setRegionDropdownOpen(true)}
//                     onClose={() => setRegionDropdownOpen(false)}
//                     ListboxProps={{ style: { maxHeight: 200, overflow: 'auto' }, className: 'scrollBarDesign' }}
//                     disablePortal
//                     blurOnSelect
//                     isOptionEqualToValue={(option, value) => option.value === value.value}
//                     getOptionLabel={(option) => option.label || ''}
//                     id="regionDropdown"
//                     options={regionOptions}
//                     value={regionValue}
//                     disabled={regionLock}
//                     disableClearable
//                     popupIcon={<ExpandMoreIcon />}
//                     onChange={(event, newValue) => {
//                         podFlag = true
//                         setRegionValue(newValue)
//                         if (newValue) {
//                             setSelectedRegion(newValue.id);
//                             setSelectedRegionName(newValue.label);
//                         }
//                     }}
//                     PaperComponent={({ children }) => (
//                         <Paper>
//                             {children}
//                         </Paper>
//                     )}
//                     renderInput={(params) => (
//                         <TextField
//                             {...params}
//                             // inputProps={{ ...params.inputProps }}
//                             sx={{
//                                 padding: 0,
//                                 fontSize: '13px',
//                                 '& .MuiAutocomplete-inputRoot': {
//                                     paddingRight: '8px !important'
//                                 },
//                                 '& svg': {
//                                     '& path': {
//                                         fill: regionDropdownOpen ? '#007ae2' : '#272829'
//                                     }
//                                 }
//                             }}
//                             InputProps={{
//                                 ...params.InputProps,
//                                 classes: {
//                                     input: 'textField',
//                                     notchedOutline: 'outlinedTextfield',
//                                 },
//                             }}
//                             //   required
//                             //   label="Region"
//                             placeholder={t("Region")}
//                         />
//                     )}
//                 />}

//                 {!showOnlyProject && <Autocomplete
//                     sx=
//                     {{
//                         color: 'inherit',
//                         width: 140,
//                         padding: 0,
//                         display: hideDropdowns ? "none" : ''
//                     }}
//                     ListboxProps={{ style: { maxHeight: 200, overflow: 'auto' }, className: 'scrollBarDesign' }}
//                     disablePortal
//                     open={PODDropdownOpen}
//                     onOpen={() => setPODDropdownOpen(true)}
//                     onClose={() => setPODDropdownOpen(false)}
//                     blurOnSelect
//                     isOptionEqualToValue={(option, value) => option.value === value.value}
//                     getOptionLabel={(option) => option.label || ''}
//                     id="podDropdown"
//                     disabled={regionLock}
//                     options={podOptions}
//                     value={podValue}
//                     disableClearable
//                     popupIcon={<ExpandMoreIcon />}
//                     onChange={(event, newValue) => {
//                         setPodValue(newValue)
//                         if (newValue) {
//                             setSelectedPod(newValue);
//                             setSelectedPodName(newValue.label);
//                         }
//                     }}
//                     PaperComponent={({ children }) => (
//                         <Paper elevation={8} content="false" shadow={theme.shadows[8]}>
//                             {children}
//                         </Paper>
//                     )}
//                     renderInput={(params) => (
//                         <TextField
//                             {...params}
//                             sx={{
//                                 padding: 0,
//                                 fontSize: '13px',
//                                 '& .MuiAutocomplete-inputRoot': {
//                                     paddingRight: '8px !important'
//                                 },
//                                 '& svg': {
//                                     '& path': {
//                                         fill: PODDropdownOpen ? '#007ae2' : '#272829'
//                                     }
//                                 }
//                             }}
//                             InputProps={{
//                                 ...params.InputProps,
//                                 classes: {
//                                     input: 'textField',
//                                     notchedOutline: 'outlinedTextfield',
//                                 },
//                             }}
//                             //   required
//                             //   label="POD"
//                             placeholder={t("POD")}
//                         />
//                     )}
//                 />}
//             </Box>
//             {/* <CustomLoaderNoBack /> */}
//         </>
//     );
// }

// export default DropdownSection;
