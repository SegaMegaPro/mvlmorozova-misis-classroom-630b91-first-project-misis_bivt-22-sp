#!/usr/bin/env node
import { askName, askGame } from '../src/cli.js';

const userName = askName();
const game = askGame(userName);