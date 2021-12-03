import { strings  } from '@angular-devkit/core';
import { apply, mergeWith, move, Rule, SchematicContext, SchematicsException, template, Tree, url } from '@angular-devkit/schematics';
// import { buildDefaultPath } from '@schematics/angular/utility/workspace'; // deprecated
import { parseName } from '@schematics/angular/utility/parse-name';
import { Schema } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hello(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workSpaceConfigBuffer = tree.read("angular.json");
    if (!workSpaceConfigBuffer) {
      throw new SchematicsException("Not an Angular CLI workspace");
    }

    const workspaceConfig = JSON.parse(workSpaceConfigBuffer.toString());
    const projectName = _options.project || workspaceConfig.defaultProject;
    const project = workspaceConfig.projects[projectName];

    // const defaultProjectPath = buildDefaultPath(project); // deprecated
    const defaultProjectPath = `${project.sourceRoot}/${project.prefix}/`;
    const parsedPath = parseName(defaultProjectPath, _options.name);

    const { name, path } = parsedPath;

    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
        name
      }),
      move(path)
    ]);

    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}
