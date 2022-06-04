import express from 'express';
import * as recordsControllor from '../controllors/recordControllor.js';

const recordRouter = express.Router();

recordRouter.get('/', recordsControllor.recordsList);
recordRouter.get('/add', recordsControllor.addRecordForm);
recordRouter.post('/add', recordsControllor.addRecord);
recordRouter.get('/:id', recordsControllor.singleRecord);
recordRouter.post('/edit/:id', recordsControllor.updateRecord);
recordRouter.get('/delete/:id', recordsControllor.deleteRecord);

export default recordRouter;
