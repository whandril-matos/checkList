import escutarEvento from "../constants/hearEvents"
import addChecklist from "./createNewInfor"

const checklistData = escutarEvento('CapsForm')
addChecklist(checklistData)
