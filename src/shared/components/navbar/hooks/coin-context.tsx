import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../../../utils/firebase'

const coinQuery = query(collection(db, 'coin'))

export const querySnapshot = await getDocs(coinQuery)
