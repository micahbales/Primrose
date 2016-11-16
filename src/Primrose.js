/*
 * Copyright (C) 2014 - 2016 Sean T. McBeth <sean@seanmcbeth.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
pliny.namespace({
  name: "Primrose",
  description: "Primrose helps you make VR applications for web browsers as easy as making other types of interactive web pages.\n\nThis top-level namespace contains classes for manipulating and viewing 3D environments."
});
var Primrose = {};

Object.assign(window, webvrStandardMonitor);