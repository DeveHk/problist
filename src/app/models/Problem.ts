import mongoose from "mongoose";
export const hintSchema = new mongoose.Schema({
    value: {
        type: String,
        default: ""
    },
});
const problemSchema = new mongoose.Schema({
    creator_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: "NA",
        required: true
    },
    link: {
        type: String,
        default: "NA",
        required: true
    },
    hints: {
        type: [hintSchema],
        default: []
    },
    topics: {
        type: [hintSchema],
        default: []
    },
    problemlink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "NA",
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});
const Problem = mongoose.models.Problem || mongoose.model('Problem', problemSchema);
export default Problem


