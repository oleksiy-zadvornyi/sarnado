import {Alert} from 'react-native';
import {put} from 'redux-saga/effects';
import RNFS from 'react-native-fs';

import * as ApiDoctor from '../../api/doctor';
import * as ApiPersonal from '../../api/personal';
import {_catch} from '../index';
import {goBack} from '../../../helpers/navigation';

export function* postDoctorFind(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const doctorFind = yield ApiDoctor.apiPostDoctorFind(action.data);
    console.log('apiDoctorFind -> ', doctorFind);

    yield put({type: 'networkIndicator', data: false});

    const {data} = doctorFind;
    const {page} = action.data.path;
    if (page > 1) {
      yield put({
        type: 'doctorFindAdd',
        data,
        page,
      });
    } else {
      yield put({
        type: 'doctorFind',
        data,
      });
    }
  } catch (error) {
    yield* _catch(error, 'apiDoctorFind');
  }
}

export function* postDoctorVerify(action) {
  try {
    yield put({type: 'networkIndicator', data: true});

    const {user} = action.data;
    const {
      passport,
      diploma,
      documentSpecialization,
      documentCategory,
    } = action.data.files;
    const {category, workExperience, specializations} = action.data.data;

    let passportPromise = [];
    passport.forEach((e) => {
      if (e.type === 'image') {
        const p = new Promise((resolve, reject) => {
          ApiPersonal.apiPostUserPhoto({
            user,
            data: e.response.data,
            contentType: e.response.type,
          })
            .then((result) => {
              resolve(result.data.path);
            })
            .catch((c) => {
              reject(c);
            });
        });
        passportPromise = [...passportPromise, p];
      } else if (e.type === 'document') {
        const p = new Promise((resolve, reject) => {
          RNFS.readFile(e.result.uri, 'base64')
            .then((data) => {
              ApiPersonal.apiPostUserPhoto({
                user,
                data,
                contentType: e.result.type,
              })
                .then((result) => {
                  resolve(result.data.path);
                })
                .catch((c) => {
                  reject(c);
                });
            })
            .catch((c) => reject(c));
        });
        passportPromise = [...passportPromise, p];
      }
    });

    let diplomaPromise = [];
    diploma.forEach((e) => {
      if (e.type === 'image') {
        const p = new Promise((resolve, reject) => {
          ApiPersonal.apiPostUserPhoto({
            user,
            data: e.response.data,
            contentType: e.response.type,
          })
            .then((result) => {
              resolve(result.data.path);
            })
            .catch((c) => {
              reject(c);
            });
        });
        diplomaPromise = [...diplomaPromise, p];
      } else if (e.type === 'document') {
        const p = new Promise((resolve, reject) => {
          RNFS.readFile(e.result.uri, 'base64')
            .then((data) => {
              ApiPersonal.apiPostUserPhoto({
                user,
                data,
                contentType: e.result.type,
              })
                .then((result) => {
                  resolve(result.data.path);
                })
                .catch((c) => {
                  reject(c);
                });
            })
            .catch((c) => reject(c));
        });
        diplomaPromise = [...diplomaPromise, p];
      }
    });

    let documentSpecializationPromise = [];
    documentSpecialization.forEach((e) => {
      if (e.type === 'image') {
        const p = new Promise((resolve, reject) => {
          ApiPersonal.apiPostUserPhoto({
            user,
            data: e.response.data,
            contentType: e.response.type,
          })
            .then((result) => {
              resolve(result.data.path);
            })
            .catch((c) => {
              reject(c);
            });
        });
        documentSpecializationPromise = [...documentSpecializationPromise, p];
      } else if (e.type === 'document') {
        const p = new Promise((resolve, reject) => {
          RNFS.readFile(e.result.uri, 'base64')
            .then((data) => {
              ApiPersonal.apiPostUserPhoto({
                user,
                data,
                contentType: e.result.type,
              })
                .then((result) => {
                  resolve(result.data.path);
                })
                .catch((c) => {
                  reject(c);
                });
            })
            .catch((c) => reject(c));
        });
        documentSpecializationPromise = [...documentSpecializationPromise, p];
      }
    });

    let documentCategoryPromise = [];
    documentCategory.forEach((e) => {
      if (e.type === 'image') {
        const p = new Promise((resolve, reject) => {
          ApiPersonal.apiPostUserPhoto({
            user,
            data: e.response.data,
            contentType: e.response.type,
          })
            .then((result) => {
              resolve(result.data.path);
            })
            .catch((c) => {
              reject(c);
            });
        });
        documentCategoryPromise = [...documentCategoryPromise, p];
      } else if (e.type === 'document') {
        const p = new Promise((resolve, reject) => {
          RNFS.readFile(e.result.uri, 'base64')
            .then((data) => {
              ApiPersonal.apiPostUserPhoto({
                user,
                data,
                contentType: e.result.type,
              })
                .then((result) => {
                  resolve(result.data.path);
                })
                .catch((c) => {
                  reject(c);
                });
            })
            .catch((c) => reject(c));
        });
        documentCategoryPromise = [...documentCategoryPromise, p];
      }
    });

    const passportPhotos = yield Promise.all(passportPromise);
    const diplomaPhotos = yield Promise.all(diplomaPromise);
    const specializationPhotos = yield Promise.all(
      documentSpecializationPromise,
    );
    const categoryPhotos = yield Promise.all(documentCategoryPromise);

    const data = {
      category,
      workExperience,
      specializations,
      passportPhotos,
      diplomaPhotos,
      specializationPhotos,
      categoryPhotos,
    };

    yield ApiDoctor.apiPostDoctorVerify({user, data});

    yield put({type: 'networkIndicator', data: false});

    goBack();

    // yield put({type: 'toast', data: 'Данные для верификации отправлены'});
    Alert.alert(
      'Верификация',
      'Ваши документы отправлены. Верификация может занять до 3х рабочих дней',
      [{text: 'Ок'}],
      {cancelable: false},
    );
  } catch (error) {
    yield* _catch(error, 'apiDoctorVerify');
  }
}
